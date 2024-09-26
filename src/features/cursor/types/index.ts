import { BaseUserMeta, User } from '@liveblocks/core';

export type TCursorState = { mode: string; message: string };

export type TLiveCursorProps = {
  others: readonly User<any, BaseUserMeta>[];
};
