import { Card, Grid, Table, TableBody } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { withTranslation } from "react-i18next";
import { useLocalStorage } from "usehooks-ts";
import { Memo } from "../models/memo";
import constants from "../utils/constants";
import AddMemo from "./home/AddMemo";
import DeleteMemoDialog from "./home/DeleteDialog";
import EditMemoDialog from "./home/EditDialog";
import MemoTableHeader from "./home/MemoTableHeader";
import MemoTableRow from "./home/MemoTableRow";

const Home = () => {
  const [memoList, setMemoList] = useLocalStorage(
    constants.memoListLocalStorageKey,
    [] as Memo[]
  );
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

  // useEffect(() => {
  // console.debug(memoList);
  // setMemoList([{ date: new Date(), title: "Test", memo: "Busy Day" }]);
  // }, []);

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
                    key={v.date.toString()}
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
          <AddMemo handleAdd={handleAdd}></AddMemo>
        </Grid>
      </Grid>

      <EditMemoDialog
        open={editDialog}
        setOpen={() => setEditDialog(!editDialog)}
        memo={toEditMemo}
        onClickEdit={(v) => {
          const tmpMemoList = memoList;
          const memoIndex = tmpMemoList.findIndex(
            (memo) => memo.date.toString() === v.date.toString()
          );
          tmpMemoList[memoIndex] = v;
          setMemoList(tmpMemoList);
          setEditDialog(false);
        }}
      ></EditMemoDialog>

      <DeleteMemoDialog
        open={deleteDialog}
        setOpen={() => setDeleteDialog(!deleteDialog)}
        memo={toDeleteMemo}
        onClickDelete={(v: Date) => {
          const tmpMemoList = memoList.filter(
            (memo) => memo.date.toString() !== v.toString()
          );
          setMemoList(tmpMemoList);
          setDeleteDialog(false);
        }}
      ></DeleteMemoDialog>
    </Box>
  );
};

export default withTranslation()(Home);
