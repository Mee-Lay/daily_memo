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

const DeleteDialog = ({
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
          {"Delete Memo"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          Are you sure you want to delete the memo with the following date? [
          {memo.date.toLocaleString()}]
        </Typography>
        <Box sx={{ height: "1vh" }}></Box>
        <Stack direction={"row"} justifyContent={"center"}>
          <Button
            variant="contained"
            endIcon={<Icon.Delete />}
            onClick={() => onClickDelete(memo.date)}
          >
            Delete
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default withTranslation()(DeleteDialog);
