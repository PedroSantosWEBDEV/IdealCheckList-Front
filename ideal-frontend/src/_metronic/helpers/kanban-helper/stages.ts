import {INITIAL_STAGES} from "../dataExamples";
import {Task, Board, Stage} from "./models";
import {getTasksByStage} from "./tasks";

export const initializeBoard = (tasks: Task[] ) => {
  
  const boardSections: Board = {};

  Object.keys(INITIAL_STAGES).forEach((stageKey) => {
    boardSections[stageKey] = getTasksByStage(
      tasks,
      stageKey
    );
  });

  return boardSections;
};

export const findBoardSectionContainer = (
  boardSections: Board,
  id: string
) => {
  if (id in boardSections) {
    return id;
  }

  const container = Object.keys(boardSections).find((key) =>
    boardSections[key].find((item) => item.id === id)
  );
  return container;
};

export const getStageById = (id: string) => {

  const stages: Stage = INITIAL_STAGES
  
  return stages[id]
};