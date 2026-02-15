import type { Access } from "payload";

export const isAdmin: Access = ({ req }) => {
  return Boolean(req.user);
};

export const isPublic: Access = () => true;
