import { BaseUserMeta, User } from '@liveblocks/core';

export type TLiveCursorProps = {
  others: readonly User<any, BaseUserMeta>[];
};
