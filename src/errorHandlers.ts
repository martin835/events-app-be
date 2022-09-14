import { Errback, Request, Response, NextFunction } from "express";

export const badRequestHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status === 400 || err.name === "ValidationError") {
    res.status(400).send({ message: err.message });
  } else {
    next(err);
  }
};

export const unauthorizedHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status === 401) {
    res.status(401).send({ message: err.message });
  } else {
    next(err);
  }
};

export const forbiddenHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status === 403) {
    res.status(403).send({ message: err.message });
  } else {
    next(err);
  }
};

export const notFoundHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.status === 404) {
    res.status(404).send({ message: err.message });
  } else {
    next(err);
  }
};

export const genericErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(err);
  res.status(500).send({ message: "Generic Server Error" });
};
