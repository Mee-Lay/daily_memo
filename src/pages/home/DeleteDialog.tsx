import * as Icon from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { withTranslation } from "react-i18next";
import { Memo } from "../../models/memo";
import { t } from "i18next";

const DeleteMemoDialog = ({
  open,
  setOpen,
  memo,
  onClickDelete,
}: {
  open: boolean;
  setOpen: () => void;
  memo: Memo;
  onClickDelete: (memoDate: Date) => void;
}) => {
  return (
    <Dialog open={open} onClose={setOpen} fullWidth>
      <DialogTitle>
        {/* Title */}
        <Typography
          sx={{ fontSize: "2vw", fontWeight: "bold", textAlign: "center" }}
        >
          {t("delete_memo")}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          {t("delete_memo_confirm")} [{memo.date.toLocaleString()}]
        </Typography>
        <Box sx={{ height: "1vh" }}></Box>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button
            variant="contained"
            endIcon={<Icon.Delete />}
            onClick={() => onClickDelete(memo.date)}
          >
            {t("delete")}
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default withTranslation()(DeleteMemoDialog);
