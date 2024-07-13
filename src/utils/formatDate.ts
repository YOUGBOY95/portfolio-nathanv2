export default function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-FR").format(date);
}
