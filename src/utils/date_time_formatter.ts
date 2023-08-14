import moment from "moment";

export class DateTimeFormatter {
  static formatDate(date: Date) {
    return moment(date.toString()).format("YYYY-MM-DD HH:mm:ss");
  }

  static formatDateFile(date: Date) {
    return moment(date.toString()).format("YYYYMMDD_HHmmss");
  }
}
