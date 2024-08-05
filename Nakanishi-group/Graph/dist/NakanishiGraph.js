"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NakanishiGraph = void 0;
const x_data_grid_1 = require("@mui/x-data-grid");
const react_1 = __importDefault(require("react"));
const NakanishiGraph = () => {
    const columns = [
        { field: "id", headerName: "ID" },
        { field: "name", headerName: "ユーザー名" },
        { field: "domain", headerName: "ドメイン" },
        { field: "plan", headerName: "プラン" },
    ];
    const rows = [
        {
            id: 1,
            name: "A",
            domain: "domainA.com",
            plan: { id: 1, name: "bronze" },
        },
        {
            id: 2,
            name: "B",
            domain: "domainB.com",
            plan: { id: 2, name: "silver" },
        },
        {
            id: 3,
            name: "C",
            domain: "domainC.com",
            plan: { id: 3, name: "gold" },
        },
    ];
    return react_1.default.createElement(x_data_grid_1.DataGrid, { rows: rows, columns: columns });
};
exports.NakanishiGraph = NakanishiGraph;
