import * as Icon from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Controller, useForm } from "react-hook-form";
import { withTranslation } from "react-i18next";
import { Memo } from "../../models/memo";
import { useEffect } from "react";

const EditDialog = ({
  open,
  setOpen,
  memo,
  onClickEdit,
}: {
  open: boolean;
  setOpen: () => void;
  memo: Memo;
  onClickEdit: (memo: Memo) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: memo.title,
      memo: memo.memo,
    },
  });

  useEffect(() => {
    setValue("title", memo.title);
    setValue("memo", memo.memo);
  }, [memo, setValue]);

  const handleEdit = async (formData: { title: string; memo: string }) => {
    onClickEdit({
      date: memo.date,
      title: formData.title,
      memo: formData.memo,
    });
  };

  return (
    <Dialog open={open} onClose={setOpen} fullWidth>
      <DialogTitle>
        {/* Title */}
        <Typography
          sx={{ fontSize: "2vw", fontWeight: "bold", textAlign: "center" }}
        >
          {"Edit Memo"}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ height: "1vh" }}></Box>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="Title"
              size="small"
              fullWidth
              placeholder="Busy day"
              required
              error={errors.title !== undefined}
              helperText={
                errors.title && errors.title.type === "required"
                  ? "Required"
                  : ""
              }
            />
          )}
        ></Controller>
        <Box sx={{ height: "1vh" }}></Box>
        <Controller
          name="memo"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextField
              value={value}
              onChange={onChange}
              label="Memo"
              multiline
              rows={20}
              maxRows={20}
              fullWidth
              placeholder="Let's go"
              required
              error={errors.memo !== undefined}
              helperText={
                errors.memo && errors.memo.type === "required" ? "Required" : ""
              }
            />
          )}
        ></Controller>
        <Box sx={{ height: "1vh" }}></Box>
        <Button
          variant="contained"
          endIcon={<Icon.Edit />}
          onClick={handleSubmit(handleEdit)}
        >
          Edit
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default withTranslation()(EditDialog);
