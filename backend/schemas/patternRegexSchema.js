export const patternPeriodeTahun = /^20\d{2}\/20\d{2}$/;
export const patternTingkat = /^(X|XI|XII|XIII)$/;
export const patternProdi = /^(TOI|TP|TSM|TJKT) [1-9]$/;
export const patternKehadiran = /^(sakit|alpa|izin)$/;
export const patternStatusSiswa =
  /^(aktif|keluar|lulus|tidak lulus|naik kelas|tidak naik kelas)$/;
export const usernamePattern = /^[A-Za-z]+$/;
export const patternJenisKelamin = /^(L|P)$/;
export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
