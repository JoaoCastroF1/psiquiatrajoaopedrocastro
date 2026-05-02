const PT_MONTHS: Record<string, string> = {
  jan: "01",
  fev: "02",
  mar: "03",
  abr: "04",
  mai: "05",
  jun: "06",
  jul: "07",
  ago: "08",
  set: "09",
  out: "10",
  nov: "11",
  dez: "12",
};

export function brDateToIso(brDate: string): string {
  const match = brDate.trim().match(/^(\d{1,2})\s+([A-Za-zçÇãÃõÕ]+)\s+(\d{4})$/);
  if (!match) return brDate;
  const [, day, monthStr, year] = match;
  const month = PT_MONTHS[monthStr.toLowerCase().slice(0, 3)] ?? "01";
  return `${year}-${month}-${day.padStart(2, "0")}`;
}
