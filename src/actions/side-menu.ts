export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const open = () => ({
  type: OPEN as typeof OPEN
});

export const close = () => ({
  type: CLOSE as typeof CLOSE
});

export type SideMenuAction = ReturnType<typeof open> | ReturnType<typeof close>;
