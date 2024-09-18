import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Dashboard",
    "Sales",
    "Cases",
    "AllCases",
    "Nlp",
    "Applications", // Add this new tag
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `dcm/user/${id}`,
      provideTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "client/products",
      providesTags: ["Products"],
    }),
    getDashboard: build.query({
      query: () => "dcm/dashboard",
      providesTags: ["Dashboard"],
    }),
    getSales: build.query({
      query: () => "sales/sales",
      providesTags: ["Sales"],
    }),
    getCases: build.query({
      query: (caseId) => `case/${caseId}/cases`,
      providesTags: ["Cases"],
    }),
    getAllCases: build.query({
      query: () => "case/cases",
      providesTags: ["AllCases"],
    }),
    getNlp: build.query({
      query: () => "nlp/nlp",
      providesTags: ["Nlp"],
    }),
    getAllApplications: build.query({
      query: () => "applications/data",
      providesTags: ["Applications"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetDashboardQuery,
  useGetSalesQuery,
  useGetCasesQuery,
  useGetAllCasesQuery,
  useGetNlpQuery,
  useGetAllApplicationsQuery, // Export the new query hook
} = api;