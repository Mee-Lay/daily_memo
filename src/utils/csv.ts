import { Memo } from "../models/memo";
import constants from "./constants";
import { DateTimeFormatter } from "./date_time_formatter";

export class CSVExporter {
  static export() {
    const rawMemoList = localStorage.getItem(constants.memoListLocalStorageKey);
    if (!rawMemoList) return "";

    const memoList = JSON.parse(rawMemoList) as Memo[];
    if (!memoList || (memoList && memoList.length == 0)) return "";

    console.log("Exporting memos as CSV file...");
    this.invokeExport(this.listToCSV(memoList), this.fileName());
    console.log("Exported");
  }

  static listToCSV(list: any[]) {
    const header = Object.keys(list[0]).join(",");
    const rows = list.map((v) => Object.values(v).join(","));
    return `${header}\n${rows.join("\n")}`;
  }

  static fileName() {
    return "memo_" + DateTimeFormatter.formatDateFile(new Date()) + ".csv";
  }

  static invokeExport(data: string, fileName: string) {
    const blob = new Blob([data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }
}
