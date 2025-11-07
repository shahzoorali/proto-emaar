export interface TeeSheet {
  day: number;
  date: string;
  startTime: string;
  hole: number;
  group: string[];
  notes?: string;
}

export const teeSheets: TeeSheet[] = [
  {
    day: 1,
    date: "2026-02-12",
    startTime: "07:00",
    hole: 1,
    group: ["1", "2", "3"],
    notes: "Championship Tees",
  },
  {
    day: 1,
    date: "2026-02-12",
    startTime: "07:10",
    hole: 1,
    group: ["4", "5", "6"],
  },
  {
    day: 1,
    date: "2026-02-12",
    startTime: "07:20",
    hole: 1,
    group: ["7", "8", "9"],
  },
  {
    day: 1,
    date: "2026-02-12",
    startTime: "07:30",
    hole: 1,
    group: ["10", "11", "12"],
  },
  {
    day: 1,
    date: "2026-02-12",
    startTime: "07:40",
    hole: 10,
    group: ["13", "14", "15"],
    notes: "Shotgun Start",
  },
  {
    day: 1,
    date: "2026-02-12",
    startTime: "07:50",
    hole: 10,
    group: ["16", "17", "18"],
  },
  {
    day: 1,
    date: "2026-02-12",
    startTime: "08:00",
    hole: 10,
    group: ["19", "20"],
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "07:00",
    hole: 1,
    group: ["19", "20", "18"],
    notes: "Reverse Order",
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "07:10",
    hole: 1,
    group: ["17", "16", "15"],
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "07:20",
    hole: 1,
    group: ["14", "13", "12"],
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "07:30",
    hole: 1,
    group: ["11", "10", "9"],
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "07:40",
    hole: 10,
    group: ["8", "7", "6"],
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "07:50",
    hole: 10,
    group: ["5", "4", "3"],
  },
  {
    day: 2,
    date: "2026-02-13",
    startTime: "08:00",
    hole: 10,
    group: ["2", "1"],
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "08:00",
    hole: 1,
    group: ["1", "2", "3"],
    notes: "Final Round - Leaders Last",
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "08:10",
    hole: 1,
    group: ["4", "5", "6"],
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "08:20",
    hole: 1,
    group: ["7", "8", "9"],
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "08:30",
    hole: 1,
    group: ["10", "11", "12"],
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "08:40",
    hole: 10,
    group: ["13", "14", "15"],
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "08:50",
    hole: 10,
    group: ["16", "17", "18"],
  },
  {
    day: 3,
    date: "2026-02-14",
    startTime: "09:00",
    hole: 10,
    group: ["19", "20"],
  },
];

