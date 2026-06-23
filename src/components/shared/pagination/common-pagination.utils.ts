export const getPagination = (page: number, total: number) => {
  if (total <= 7) return [...Array(total)].map((_, i) => i + 1);
  const pagination: (number | "...")[] = [];

  pagination.push(1);

  const start = Math.max(2, page - 2);
  const end = Math.min(total - 1, page + 2);

  if (start > 2) {
    pagination.push("...");
  }

  for (let i = start; i <= end; i++) {
    pagination.push(i);
  }

  if (end < total - 1) {
    pagination.push("...");
  }

  pagination.push(total);

  return pagination;
};
