
import { useSelector } from "react-redux";
import { CustomIconButton } from "../components";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NotingSelectedView } from "../views";

export const JournalPage = () => {
  // @ts-ignore
  const { active } = useSelector((state) => state.journal);

  return (
    <JournalLayout>
      {active ? <NoteView /> : <NotingSelectedView />}

      <CustomIconButton />
    </JournalLayout>
  );
};
