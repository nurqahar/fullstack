import express from "express";
import mapelRoute from "./mapelRoute.js";
import catatanMengajarRoute from "./catatanMengajarRoute.js";
import guruRoute from "./guruRoute.js";
import kelasRoute from "./kelasRoute.js";
import nilaiRoute from "./nilaiRoute.js";
import presensiRoute from "./presensiRoute.js";
import riwayatSiswaRoute from "./riwayatSiswaRoute.js";
import siswaRoute from "./siswaRoute.js";

const router = express.Router();

router.use("/mapel", mapelRoute);
router.use("/catatanMengajar", catatanMengajarRoute);
router.use("/guru", guruRoute);
router.use("/kelas", kelasRoute);
router.use("/nilai", nilaiRoute);
router.use("/presensi", presensiRoute);
router.use("/riwayatSiswa", riwayatSiswaRoute);
router.use("/siswa", siswaRoute);

export default router;
