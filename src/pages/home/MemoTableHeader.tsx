import { TableCell, TableHead, TableRow } from "@mui/material";
import { t } from "i18next";
import { withTranslation } from "react-i18next";

const MemoTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          size="small"
          align="left"
          sx={{ width: "20%", py: "1vw", fontWeight: "bold" }}
        >
          {t("date")}
        </TableCell>
        <TableCell
          size="small"
          align="left"
          sx={{ width: "20%", fontWeight: "bold" }}
        >
          {t("title")}
        </TableCell>
        <TableCell
          size="small"
          align="left"
          sx={{ width: "50%", fontWeight: "bold" }}
        >
          {t("memo")}
        </TableCell>
        <TableCell
          size="small"
          align="right"
          sx={{ width: "10%", fontWeight: "bold" }}
        ></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default withTranslation()(MemoTableHeader);
