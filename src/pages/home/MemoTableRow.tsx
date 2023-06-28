import * as Icon from "@mui/icons-material";
import { IconButton, TableCell, TableRow } from "@mui/material";
import { Stack } from "@mui/system";
import { withTranslation } from "react-i18next";
import { Memo } from "../../models/memo";
import moment from "moment";

const MemoTableRow = ({
  memo,
  onClickEdit,
  onClickDelete,
}: {
  memo: Memo;
  onClickEdit: () => void;
  onClickDelete: () => void;
}) => {
  return (
    <TableRow>
      <TableCell
        size="small"
        align="left"
        sx={{ width: "25%", verticalAlign: "middle" }}
      >
        {moment(memo.date.toString()).format("YYYY-MM-DD HH:mm:ss")}
      </TableCell>
      <TableCell
        size="small"
        align="left"
        sx={{ width: "20%", verticalAlign: "middle" }}
      >
        {memo.title}
      </TableCell>
      <TableCell
        size="small"
        align="left"
        sx={{ width: "50%", verticalAlign: "middle", whiteSpace: "pre-line" }}
      >
        {memo.memo}
      </TableCell>
      <TableCell size="small" align="right" sx={{ width: "10%" }}>
        <Stack direction={"row"}>
          <IconButton size="small" onClick={() => onClickEdit()}>
            <Icon.Edit />
          </IconButton>
          <IconButton size="small" onClick={() => onClickDelete()}>
            <Icon.Delete />
          </IconButton>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default withTranslation()(MemoTableRow);
