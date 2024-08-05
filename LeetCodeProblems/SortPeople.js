var sortPeople = function (names, heights) {
	let arr = [...heights].sort((a, b) => b - a);
	const res = [];
	for (let i = 0; i < arr.length; i++) {
		let ind = heights.indexOf(arr[i]);
		res[i] = names[ind];
	}
	return res;
};
console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // Output: ["Bob","Alice","Bob"]

import {
	Box,
	Button,
	Container,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import NHBreadcrumb from "../../NHBreadcrumb";
import ADF_Form_Sec1 from "@components/ADF_Form_Sec1";
import { useEffect, useReducer, useRef, useState } from "react";
import regex from "@regex";
import { fields2, fields } from "./fields";
import { useNavigate, useParams } from "react-router-dom";
import jwtAxios from "@crema/services/auth/jwt-auth";
import moment from "moment";
import Message from "../../Toaster";
import { adf_popup } from "@api";
import _ from "lodash";
const role = JSON.parse(localStorage.getItem("userRole"));
import { cs } from "@common/caseChange";
const index = () => {
	const keys_ = [
		"lableName",
		"labelCode",
		"noOfAccs",
		"amountDisbursed",
		"noOfOutstandingAccs",
		"noOfBeneficiares",
		"balanceOs",
	];
	const [__, forceUpdate] = useReducer((x) => x + 1, 0);
	const inputRefTable1 = useRef([]);
	const [formData, setFormData] = useState([]);
	const [data, setData] = useState({});
	const [action, setAction] = useState({});
	const { id, date } = useParams();
	const [editId, setEditId] = useState("");
	const [draftData, setDraftData] = useState({});
	const navigate = useNavigate();
	console.log(__);

	useEffect(() => {
		const result = id.split("+");
		if (result[1] == "add") {
			setAction({
				add: true,
				edit: false,
				view: false,
			});
		} else if (result[1] == "edit") {
			setAction({
				add: false,
				edit: true,
				view: false,
			});
		} else if (result[1] == "view") {
			setAction({
				add: false,
				edit: false,
				view: true,
			});
		}
		setEditId(result[0]);
	}, []);
	///////CALCULATIONS SECTION STARTS HERE/////////
	function nb(d) {
		return (d || 0) - 0;
	}
	const getSum = (ar, fi) => {
		let tem = formData;
		if (!tem || tem.length < 64) return;
		keys_?.map((el, ind) => {
			if (ind > 0) {
				let colSum = 0;
				ar?.map((j) => {
					colSum = colSum + nb(tem[j][el]);
				});
				if ([56, 26, 31, 32].includes(fi)) {
					tem[fi][el] = nb(colSum).toFixed(0);
				} else {
					tem[fi][el] = nb(colSum).toFixed(2);
				}
			}
		});
		setFormData([...tem]);
	};
	const getCalculation = () => {
		getSum([7, 8, 9, 10, 11, 12, 13], 6); // done
		getSum([3, 4, 6, 14, 22], 2); // done
		getSum([2, 16, 19, 30], 1); // done
		getSum([15, 17, 21, 23], 26); // done
		getSum([32, 37, 40, 43, 44], 31); // done
		getSum([33, 34, 35, 36], 32);
		getSum([38, 39], 37); // done
		getSum([41, 42], 40); // done
		getSum([56, 60, 61, 62, 63], 57);
		getSum([1, 31, 46, 47, 48, 49, 50, 51, 52, 53], 0); // done
		getSum([0, 56], 64); // done
	};
	///////CALCULATIONS SECTION ENDS HERE/////////s

	useEffect(() => {
		const commonGet = async () => {
			if (_.isEmpty(action)) return;
			let url = "";
			if (action.add) {
				url = `adfReport/prioritySectorAdvances/checkPrioritySectorAdvancesDraftForm?date=${moment(
					date
				).format("DD-MM-YYYY")}&reportCode=PSA_QUARTERLY`;
			} else {
				url = `adfReport/prioritySectorAdvances/findById?id=${editId}`;
			}
			try {
				let response = await jwtAxios(url, {
					method: action.add ? "POST" : "GET",
				});
				if (response?.data?.data?.id) {
					inputRefTable1.current = response.data.data;
					setDraftData(response.data.data);
					setFormData(response?.data?.data?.categories || []);
					setData({
						bankName: response.data.data.bankName,
						quarterEnded: response.data.data.quarterEnded,
					});
				} else {
					Message(
						"error",
						response.data.errorMsg || "Something went wrong.",
						1500
					);
					navigate("/dashboards/qpsa");
					setDraftData({});
				}
			} catch (error) {
				console.log(error, ":::::>>>>>>");
				Message("error", "Something went wrong.", 1500);
			}
		};
		commonGet();
	}, [action]);

	console.log(data, "DATA");

	const handleInput = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		setData({
			...data,
			[name]: value,
		});
	};

	console.log(data.bankName, "BANK NAME");

	const handleSubmit = async function (e) {
		e.preventDefault();
		let url = "";
		if (action.add) {
			url = `adfReport/prioritySectorAdvances/addPrioritySectorAdvances`;
		} else {
			url =
				"adfReport/prioritySectorAdvances/updatePrioritySectorAdvances";
		}
		let d = {
			...draftData,
			...inputRefTable1.current,
			categories: formData,
			// dateOfReport: action.add ? moment(date).format('DD-MM-YYYY') : date,
			draftStatus: "SUBMIT",
			...data,
		};
		let response = await jwtAxios.post(url, d);
		if (response.data.statusCode == "200") {
			Message(
				"success",
				action.add ? adf_popup.submit : adf_popup.update,
				1500
			);
			navigate("/dashboards/qpsa");
		} else {
			Message("error", response.data.errorMsg, 1500);
		}
	};

	const handleSaveDraft = async function () {
		let d = {
			...draftData,
			...inputRefTable1.current,
			categories: formData,
			// dateOfReport: action.add ? moment(date).format('DD-MM-YYYY') : date,
			draftStatus: "DRAFT",
			...data,
		};
		let response = await jwtAxios.post(
			`adfReport/prioritySectorAdvances/addPrioritySectorAdvances`,
			d
		);
		if (response.data.statusCode == "200") {
			Message("success", adf_popup.draft, 1500);
			navigate("/dashboards/qpsa");
		} else {
			Message("error", response.data.errorMsg, 1500);
		}
	};

	return (
		<>
			<form onSubmit={(e) => handleSubmit(e)}>
				<Container maxWidth="xl">
					<NHBreadcrumb
						urlData={[
							{ name: "Home", url: "/" },
							{
								name: "ADF",
							},
							{
								name: "Quarterly",
							},
							{
								name: "Priority Sector Advance - Quarterly",
							},
						]}
					/>
					<Box>
						<Typography
							sx={{ fontSize: "1.5rem", fontWeight: "600" }}
						>
							Priority Sector Advance - Quarterly
						</Typography>
					</Box>
				</Container>
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "end",
						mt: 3,
						mb: 3,
					}}
				>
					<ADF_Form_Sec1
						type={id?.split("+")[1]}
						listUrl="/dashboards/qpsa"
						data={draftData}
						genUrl={`adfReport/prioritySectorAdvances/generateReport?id=${editId}&status=GENERATED`}
					/>
				</Box>
				<Box sx={{ display: "flex", flexDirection: "column", mb: 3 }}>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<label>Name of Bank</label>
						<input
							required
							disabled={action.view}
							type="text"
							className="adf_input"
							name="bankName"
							value={data?.bankName}
							onChange={(e) => handleInput(e)}
						/>
					</Box>
					<Box sx={{ display: "flex", flexDirection: "column" }}>
						<label>For the Quater End</label>
						<input
							required
							disabled={true}
							type="text"
							className="adf_input"
							name="quarterEnded"
							value={data?.quarterEnded}
							onChange={(e) => handleInput(e)}
						/>
					</Box>
				</Box>
				<TableContainer sx={{ mb: 8 }}>
					<Table
						aria-label="sticky table"
						style={{ border: "1px solid #e0e0e0" }}
					>
						<TableHead>
							<TableRow>
								<TableCell
									key={"right-head"}
									align={"center"}
									style={{ fontWeight: 600 }}
									colSpan={3}
								>
									Number of Accounts in absolute terms and
									Amount in Rs. thousands
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{fields2?.map((ele, ind) => {
								return (
									<TableRow key={"heading" + ind}>
										{ele?.map((col, ind_) => {
											let style = col.style || {};
											const { type } = col;
											return (
												<TableCell
													style={{ ...style }}
													key={ind + "cell_" + ind_}
												>
													{type == "text" ||
													type == "number" ? (
														<div
															style={{
																position:
																	"relative",
															}}
														>
															<label
																style={{
																	position:
																		"absolute",
																	left: "9px",
																	top: "9px",
																}}
															>
																₹
															</label>
															<input
																required
																style={{
																	width: "100%",
																	paddingLeft:
																		"18px",
																	backgroundColor:
																		col.color
																			? col.color
																			: "",
																}}
																className="adf_input"
																fullWidth
																type={
																	type ==
																	"number"
																		? "text"
																		: type
																}
																size="small"
																name={col.name}
																disabled={
																	col.disabled ||
																	action.view
																}
																value={
																	action.view &&
																	type ==
																		"text"
																		? cs(
																				inputRefTable1
																					.current[
																					col
																						.name
																				]
																		  )
																		: inputRefTable1
																				.current[
																				col
																					.name
																		  ]
																}
																// value={inputRefTable1.current[col.name] || ''}
																onInput={(
																	e
																) => {
																	const d =
																		inputRefTable1.current;
																	if (
																		String(
																			e
																				.target
																				.value
																		).match(
																			regex.decimal2
																		) ||
																		type ==
																			"date"
																	) {
																		inputRefTable1.current[
																			col.name
																		] =
																			e.target.value;
																	}
																	d[
																		"netBankCredit"
																	] = (
																		nb(
																			d[
																				"bankCredit"
																			]
																		) -
																			nb(
																				d[
																					"billRediscounted"
																				]
																			) ||
																		0
																	).toFixed(
																		2
																	);
																	d["anbc"] =
																		(
																			nb(
																				d[
																					"netBankCredit"
																				]
																			) +
																				nb(
																					d[
																						"outStandingDeposits"
																					]
																				) -
																				(nb(
																					d[
																						"eligibleAmount"
																					]
																				) +
																					nb(
																						d[
																							"advancesExtended"
																						]
																					) +
																					nb(
																						d[
																							"investments"
																						]
																					)) +
																				(nb(
																					d[
																						"otherInvestments"
																					]
																				) -
																					nb(
																						d[
																							"faceValue"
																						]
																					)) +
																				nb(
																					d[
																						"bondsDebentures"
																					]
																				) ||
																			0
																		).toFixed(
																			2
																		);
																	forceUpdate();
																}}
															/>
														</div>
													) : (
														col.title
													)}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				{/* TABLE 2 */}
				<TableContainer sx={{ mb: 8 }}>
					<Table
						aria-label="sticky table"
						style={{ border: "1px solid #e0e0e0" }}
					>
						<TableHead>
							<TableRow>
								<TableCell rowSpan={2}>S.No</TableCell>
								<TableCell>Categories</TableCell>
								<TableCell colSpan={2}>
									Disbursment during the Quarter
								</TableCell>
								<TableCell colSpan={3}>
									Outstanding at the end of the Quarter
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell></TableCell>
								<TableCell>No. of A/cs</TableCell>
								<TableCell>Account Disbursed</TableCell>
								<TableCell>No. of A/cs</TableCell>
								<TableCell>Account Disbursed</TableCell>
								<TableCell>Balance O/s</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{fields?.map((ele, ind) => {
								return (
									<TableRow key={"heading" + ind}>
										{ele?.map((col, ind_) => {
											let style = col.style || {};
											const { type } = col;
											let te = formData || [];
											te[ind] = {
												...(te[ind] || {}),
												lableName: ele[1]?.title,
												sNo: ind,
												reportId: draftData.id,
											};
											return (
												<TableCell
													style={{ ...style }}
													key={ind + "cell_" + ind_}
												>
													{ind + "    " + ind_}
													{type == "text" ||
													type == "number" ? (
														<div
															style={{
																position:
																	"relative",
															}}
														>
															{[3, 6].includes(
																ind_
															) && (
																<label
																	style={{
																		position:
																			"absolute",
																		left: "9px",
																		top: "9px",
																	}}
																>
																	₹
																</label>
															)}
															<input
																className="adf_input"
																required
																//style={col.nav}
																style={{
																	paddingLeft:
																		"18px",
																}}
																fullWidth
																size="small"
																type={
																	type ==
																	"number"
																		? "text"
																		: type
																}
																name={col.name}
																disabled={
																	col.disabled ||
																	action.view
																}
																value={
																	formData[
																		ind
																	][
																		keys_[
																			ind_
																		]
																	] || ""
																}
																onInput={(
																	e
																) => {
																	if (
																		String(
																			e
																				.target
																				.value
																		).match(
																			![
																				3,
																				6,
																			].includes(
																				ind_
																			) ||
																				([
																					3,
																					6,
																				].includes(
																					ind_
																				) &&
																					[
																						43,
																						44,
																						45,
																					].includes(
																						ind
																					))
																				? /^\d*$/
																				: regex.decimal2
																		) ||
																		type ==
																			"date"
																	) {
																		let tem =
																			formData;
																		tem[
																			ind
																		][
																			keys_[
																				ind_
																			]
																		] =
																			e.target.value;
																		setFormData(
																			[
																				...tem,
																			]
																		);
																		getCalculation();
																	}
																}}
															/>
														</div>
													) : (
														col.title
													)}
												</TableCell>
											);
										})}
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				<TableContainer sx={{ display: "none" }}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell sx={{ minWidth: "500px" }}>
									Sector Wise Achievement
								</TableCell>
								<TableCell>Effective ANBC/CEOBE</TableCell>
								<TableCell>Total Outstanding</TableCell>
								<TableCell>% Achievement</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{[
								"Overall PSL",
								"Agriculture",
								"Small and Marginal Farmers",
								"Non-Corporate Farmers",
								"Micro Enterprises",
								"Weaker Sections",
							].map((_, i) => {
								return (
									<TableRow key={i}>
										<TableCell align="center">
											{_}
										</TableCell>
										<TableCell align="center">
											0.00
										</TableCell>
										<TableCell align="center">
											0.00
										</TableCell>
										<TableCell align="center">
											#DIV/0!
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
				{!action.view && (
					<Box
						sx={{
							mt: 3,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							gap: "10px",
						}}
					>
						{role !== "ADF CHECKER" && (
							<Button
								onClick={() => handleSaveDraft()}
								type="button"
								variant="contained"
							>
								Save as Draft
							</Button>
						)}

						<Button type="submit" variant="contained">
							{action.edit ? "Update" : "Submit"}
						</Button>
					</Box>
				)}
			</form>
		</>
	);
};

export default index;
