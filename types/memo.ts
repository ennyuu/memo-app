import { type Timestamp } from "firebase/firestore";

interface Memo {
  id: string;
  bodyText: string;
  createdAt: Timestamp;
}

export type { Memo };
