const List = [
    {
        id: 551,
        trxNumber: "LEAV2024030205593800704",
        oldStatusCode: "Onseva",
        nextStatusCode: "PENDING_WITH_RM",
        activityOwner: "OR1011005",
        activityOwnerName: "SuneelYadav",
        remarks: null,
        applyedType: "ON_SEVA",
        isConcerned: null,
        activityStartDate: "2024-04-02T05:59:39.000+0000",
        activityEndDate: "2024-04-02T05:59:39.000+0000",
    },
    {
        id: 552,
        trxNumber: "LEAV2024030205593800704",
        oldStatusCode: "PENDING_WITH_RM",
        nextStatusCode: "APPROVED_BY_RM",
        activityOwner: "OR1011016",
        activityOwnerName: "raju",
        remarks: "OR1011016",
        applyedType: "ON_SEVA",
        isConcerned: null,
        activityStartDate: "2024-04-02T06:00:11.000+0000",
        activityEndDate: "2024-04-02T06:00:11.000+0000",
    },
    {
        id: 553,
        trxNumber: "LEAV2024030205593800704",
        oldStatusCode: "PENDING_WITH_RM",
        nextStatusCode: "APPROVED_BY_RM",
        activityOwner: "OR1011015",
        activityOwnerName: "Smith",
        remarks: "OR1011015",
        applyedType: "ON_SEVA",
        isConcerned: null,
        activityStartDate: "2024-04-02T06:00:35.000+0000",
        activityEndDate: "2024-04-02T06:00:35.000+0000",
    },
    {
        id: 554,
        trxNumber: "LEAV2024030205593800704",
        oldStatusCode: "PENDING_WITH_RM",
        nextStatusCode: "APPROVED_BY_RM",
        activityOwner: "OR1011011",
        activityOwnerName: "Sanjay",
        remarks: "OR1011011",
        applyedType: "ON_SEVA",
        isConcerned: null,
        activityStartDate: "2024-04-02T06:00:58.000+0000",
        activityEndDate: "2024-04-02T06:00:58.000+0000",
    },
];
const pendingWith = "OR1011016,OR1011010,OR1011019";
const arr = pendingWith.split(",").splice(0,2).join();
console.log(arr);

const res = List.filter((item) => item.activityOwner === pendingWith);
console.log("res-->", res);
