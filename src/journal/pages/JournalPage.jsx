
import { CustomIconButton } from "../components";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView } from "../views";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <NotingSelectedView /> */}
      <NoteView />
      <CustomIconButton />
    </JournalLayout>
  );
};
