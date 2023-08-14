import * as Icon from "@mui/icons-material";
import { Button, Card, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { t } from "i18next";
import { Controller, useForm } from "react-hook-form";
import { withTranslation } from "react-i18next";

const AddMemo = ({
  handleAdd,
}: {
  handleAdd: (formData: { title: string; memo: string }) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      memo: "",
    },
  });

  return (
    <Card elevation={1} sx={{ p: 2 }}>
      {/* Title */}
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          color: "inherit",
          textDecoration: "none",
        }}
      >
        {t("add_memo")}
      </Typography>
      <Box sx={{ height: "1vh" }}></Box>

      {/* Title */}
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
            label={t("title")}
            size="small"
            fullWidth
            placeholder="Busy day"
            required
            error={errors.title !== undefined}
            helperText={
              errors.title && errors.title.type === "required" ? "Required" : ""
            }
          />
        )}
      ></Controller>
      <Box sx={{ height: "1vh" }}></Box>

      {/* Memo */}
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
            label={t("memo")}
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

      {/* Add Btn */}
      <Button
        variant="contained"
        endIcon={<Icon.Add />}
        onClick={handleSubmit(handleAdd)}
      >
        {t("add")}
      </Button>
    </Card>
  );
};

export default withTranslation()(AddMemo);
