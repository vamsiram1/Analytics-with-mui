import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../axiosInstance";

const DISTRIBUTION_UPDATE = "/distribution/updates"

const convertToBackendDateFormat = (ddmmyyyy) => {
  if (!ddmmyyyy) return '';
  const [day, month, year] = ddmmyyyy.split('/');
  return `${year}-${month}-${day}`; // Convert to yyyy-MM-dd format
};

// DTO Mappings for each form type
const zoneFormDTO = (zoneValues) => ({
  academicYearId: zoneValues.academicYearId,
  stateId: zoneValues.stateId,
  cityId: zoneValues.cityId,
  zoneId: zoneValues.zoneId,
  issuedByTypeId: 1,
  issuedToTypeId: 2,
  issuedToEmpId: zoneValues.issuedToEmpId,
  appStartNo: zoneValues.applicationNoFrom,
  appEndNo: zoneValues.applicationNoTo,
  range: zoneValues.range,
  issueDate: convertToBackendDateFormat(zoneValues.issueDate),
  createdBy: zoneValues.createdBy,
});

const dgmFormDTO = (dgmValues) => ({
  userId: dgmValues.userId,
  academicYearId: dgmValues.academicYearId,
  cityId: dgmValues.cityId,
  zoneId: dgmValues.zoneId,
  campusId: dgmValues.campusId,
  issuedToId: dgmValues.issuedToId,
  dgmEmployeeId: dgmValues.dgmEmployeeId,
  selectedBalanceTrackId: dgmValues.selectedBalanceTrackId,
  applicationNoFrom: dgmValues.applicationNoFrom,
  applicationNoTo: dgmValues.applicationNoTo,
  range: dgmValues.range,
});

const campusFormDTO = (campusValues) => ({
  userId: campusValues.userId,
  academicYearId: campusValues.academicYearId,
  stateId: campusValues.stateId,
  districtId: campusValues.districtId,
  cityId: campusValues.cityId,
  campusId: campusValues.campusId,
  issuedToId: campusValues.issuedToId,
  proEmployeeId: campusValues.proEmployeeId,
  selectedBalanceTrackId: campusValues.selectedBalanceTrackId,
  applicationNoFrom: campusValues.applicationNoFrom,
  applicationNoTo: campusValues.applicationNoTo,
  range: campusValues.range,
});

// ---------------- Low-level POSTers ----------------
const sendFormData = async ({ formValues, formType, id }) => {
  // Defensive normalization to avoid "Cannot read properties of undefined (reading 'toLowerCase')"
  const t = String(formType ?? "")
    .trim()
    .toLowerCase();

  let endpoint;
  let formData;

  // Determine the API endpoint and map values to respective DTO
  switch (t) {
    case "zone":
      endpoint = `update-zone/${id}`;
      formData = zoneFormDTO(formValues); // Map values to Zone DTO
      break;
    case "dgm":
      endpoint = `update-dgm/${id}`;
      formData = dgmFormDTO(formValues); // Map values to DGM DTO
      break;
    case "campus":
      endpoint = `update-campus/${id}`;
      formData = campusFormDTO(formValues); // Map values to Campus DTO
      break;
    default:
      throw new Error(
        `Invalid formType "${formType}". Expected "zone" | "dgm" | "campus".`
      );
  }

  // Build the full URL with DISTRIBUTION_POST prefix
  const fullUrl = `${DISTRIBUTION_UPDATE}/${endpoint}`;

  // Send the POST request with the appropriate endpoint and form data
  return (await axiosInstance.put(fullUrl, formData, id)).data;
};

// ---------------- v5 hooks (object signature) ----------------
export const useZoneForm = () => useMutation({
  mutationFn: sendFormData,
  onError: (error) => {
    console.error("Error during Zone form submission:", error);
  },
  onSuccess: (data) => {
    console.log("Zone form submitted successfully:", data);
  }
});

export const useDgmForm = () => useMutation({
  mutationFn: sendFormData,
  onError: (error) => {
    console.error("Error during DGM form submission:", error);
  },
  onSuccess: (data) => {
    console.log("DGM form submitted successfully:", data);
  }
});

export const useCampusForm = () => useMutation({
  mutationFn: sendFormData,
  onError: (error) => {
    console.error("Error during Campus form submission:", error);
  },
  onSuccess: (data) => {
    console.log("Campus form submitted successfully:", data);
  }
});

export const useAllFormPost = () => useMutation({
  mutationFn: sendFormData,
  onError: (error) => {
    console.error("Error during form submission:", error);
  },
  onSuccess: (data) => {
    console.log("Form submitted successfully:", data);
  }
});