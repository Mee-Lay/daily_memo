import * as Icon from "@mui/icons-material";
import {
  Button,
  Card,
  Grid,
  Table,
  TableBody,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { withTranslation } from "react-i18next";
import { Memo } from "../models/memo";
import EditDialog from "./home/EditDialog";
import MemoTableHeader from "./home/MemoTableHeader";
import MemoTableRow from "./home/MemoTableRow";
import DeleteDialog from "./home/DeleteDialog";

const Home = () => {
  const [memoList, setMemoList] = useState([] as Memo[]);
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
  const [editDialog, setEditDialog] = useState(false);
  const [toEditMemo, setToEditMemo] = useState({
    date: new Date(),
    title: "",
    memo: "",
  } as Memo);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [toDeleteMemo, setToDeleteMemo] = useState({
    date: new Date(),
    title: "",
    memo: "",
  } as Memo);

  useEffect(() => {
    setMemoList([{ date: new Date(), title: "Test", memo: "Busy Day" }]);
  }, []);

  const handleAdd = async (formData: { title: string; memo: string }) => {
    const tmpMemoList = memoList;
    tmpMemoList.push({
      date: new Date(),
      title: formData.title,
      memo: formData.memo,
    });
    setMemoList(tmpMemoList);
  };

  return (
    <Box sx={{ pt: "2vh", px: "2vw" }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {/* List Memo */}
          <Card elevation={1}>
            <Table>
              <MemoTableHeader></MemoTableHeader>
              <TableBody>
                {memoList.map((v, _) => (
                  <MemoTableRow
                    key={v.date.getMilliseconds()}
                    memo={v}
                    onClickEdit={() => {
                      setToEditMemo(v);
                      setEditDialog(true);
                    }}
                    onClickDelete={() => {
                      setToDeleteMemo(v);
                      setDeleteDialog(true);
                    }}
                  ></MemoTableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </Grid>

        <Grid item xs={4}>
          {/* Add Memo */}
          <Card elevation={1} sx={{ p: 2 }}>
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
              ADD MEMO
            </Typography>
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
                    errors.memo && errors.memo.type === "required"
                      ? "Required"
                      : ""
                  }
                />
              )}
            ></Controller>
            <Box sx={{ height: "1vh" }}></Box>
            <Button
              variant="contained"
              endIcon={<Icon.Add />}
              onClick={handleSubmit(handleAdd)}
            >
              Add
            </Button>
          </Card>
        </Grid>
      </Grid>

      <EditDialog
        open={editDialog}
        setOpen={() => setEditDialog(!editDialog)}
        memo={toEditMemo}
        onClickEdit={(v) => {
          const tmpMemoList = memoList;
          const memoIndex = tmpMemoList.findIndex(
            (memo) => memo.date.getMilliseconds() === v.date.getMilliseconds()
          );
          console.log(memoIndex);
          tmpMemoList[memoIndex] = v;
          setMemoList(tmpMemoList);
          setEditDialog(false);
        }}
      ></EditDialog>

      <DeleteDialog
        open={deleteDialog}
        setOpen={() => setDeleteDialog(!deleteDialog)}
        memo={toDeleteMemo}
        onClickDelete={(v: Date) => {
          const tmpMemoList = memoList.filter(
            (memo) => memo.date.getMilliseconds() !== v.getMilliseconds()
          );
          setMemoList(tmpMemoList);
          setDeleteDialog(false);
        }}
      ></DeleteDialog>
    </Box>
  );
};

export default withTranslation()(Home);
