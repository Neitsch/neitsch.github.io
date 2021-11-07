import { parseISO, format } from "date-fns";
import * as React from "react";

export default function Date({
  dateString,
}: {
  readonly dateString: string;
}): JSX.Element {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
