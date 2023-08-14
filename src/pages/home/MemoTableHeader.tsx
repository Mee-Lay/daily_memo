import * as Icon from "@mui/icons-material";
import { Button, TableCell, TableHead, TableRow } from "@mui/material";
import { t } from "i18next";
import { withTranslation } from "react-i18next";
import { CSVExporter } from "../../utils/csv";

const MemoTableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell
          size="small"
          align="left"
          sx={{ width: "20%", py: "1vw", fontWeight: "bold", fontSize: "20px" }}
        >
          {t("date")}
        </TableCell>
        <TableCell
          size="small"
          align="left"
          sx={{ width: "20%", fontWeight: "bold", fontSize: "20px" }}
        >
          {t("title")}
        </TableCell>
        <TableCell
          size="small"
          align="left"
          sx={{ width: "50%", fontWeight: "bold", fontSize: "20px" }}
        >
          {t("memo")}
        </TableCell>
        <TableCell
          size="small"
          align="right"
          sx={{ width: "10%", fontWeight: "bold", fontSize: "20px" }}
        >
          {/* Export as CSV */}
          <Button
            variant="contained"
            endIcon={<Icon.Download />}
            onClick={() => CSVExporter.export()}
          >
            {t("CSV")}
          </Button>
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

export default withTranslation()(MemoTableHeader);
