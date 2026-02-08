import { Activity, type FC } from "react";
import type { FormFieldWrapperProps, FormProviderProps } from "./types";
import {
  FormProvider as HookFormProvider,
  Controller,
  useFormContext,
  type FieldValues,
} from "react-hook-form";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { cn } from "@/lib/utils";

export const FormProvider = <T extends FieldValues>({
  onSubmit,
  form,
  children,
  className,
}: FormProviderProps<T>) => {
  return (
    <HookFormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className} noValidate>
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
        <Field data-invalid={fieldState.invalid} className={cn("w-full space-y-2", className)}>
          <Activity mode={label ? 'visible' : 'hidden'}>
            <FieldLabel>{label}</FieldLabel>
          </Activity>
          {children(field, fieldState.invalid)}
          <Activity mode={description ? 'visible' : 'hidden'}>
            <FieldDescription>{description}</FieldDescription>
          </Activity>
          <Activity mode={fieldState.invalid ? 'visible' : 'hidden'}>
            <FieldError errors={[fieldState.error]} />
          </Activity>
        </Field>
      )}
    />
  );
};
