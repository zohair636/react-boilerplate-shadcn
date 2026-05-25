import type {
  FormFieldWrapperProps,
  FormProviderProps,
} from "./common-form-provider.types";
import {
  FormProvider as HookFormProvider,
  Controller,
  useFormContext,
  type FieldValues,
} from "react-hook-form";
import {
  Field,
  FieldDescription,
  FieldError,
} from "@/components/ui/field";
import { cn } from "@/lib/utils";
import CommonFieldLabel from "../label/field-label";

export const FormProvider = <T extends FieldValues>({
  onSubmit,
  form,
  children,
  className,
}: FormProviderProps<T>) => {
  return (
    <HookFormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={className}
        noValidate
      >
        {children}
      </form>
    </HookFormProvider>
  );
};

export const FormFieldWrapper = <T extends FieldValues>({
  name,
  label,
  description,
  className,
  children,
}: FormFieldWrapperProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <Field
          data-invalid={fieldState.invalid}
          className={cn("w-full space-y-2", className)}
        >
          {label && <CommonFieldLabel label={label} />}
          {children(field, fieldState.invalid)}
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  );
};
