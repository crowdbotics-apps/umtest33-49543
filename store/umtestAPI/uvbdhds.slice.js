import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_uvbdhd_list = createAsyncThunk(
  "uvbdhds/api_v1_uvbdhd_list",
  async payload => {
    const response = await apiService.api_v1_uvbdhd_list(payload)
    return response.data
  }
)
export const api_v1_uvbdhd_create = createAsyncThunk(
  "uvbdhds/api_v1_uvbdhd_create",
  async payload => {
    const response = await apiService.api_v1_uvbdhd_create(payload)
    return response.data
  }
)
export const api_v1_uvbdhd_retrieve = createAsyncThunk(
  "uvbdhds/api_v1_uvbdhd_retrieve",
  async payload => {
    const response = await apiService.api_v1_uvbdhd_retrieve(payload)
    return response.data
  }
)
export const api_v1_uvbdhd_update = createAsyncThunk(
  "uvbdhds/api_v1_uvbdhd_update",
  async payload => {
    const response = await apiService.api_v1_uvbdhd_update(payload)
    return response.data
  }
)
export const api_v1_uvbdhd_partial_update = createAsyncThunk(
  "uvbdhds/api_v1_uvbdhd_partial_update",
  async payload => {
    const response = await apiService.api_v1_uvbdhd_partial_update(payload)
    return response.data
  }
)
export const api_v1_uvbdhd_destroy = createAsyncThunk(
  "uvbdhds/api_v1_uvbdhd_destroy",
  async payload => {
    const response = await apiService.api_v1_uvbdhd_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const uvbdhdsSlice = createSlice({
  name: "uvbdhds",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_uvbdhd_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_uvbdhd_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_uvbdhd_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_uvbdhd_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_uvbdhd_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_uvbdhd_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_uvbdhd_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_uvbdhd_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_uvbdhd_list,
  api_v1_uvbdhd_create,
  api_v1_uvbdhd_retrieve,
  api_v1_uvbdhd_update,
  api_v1_uvbdhd_partial_update,
  api_v1_uvbdhd_destroy,
  slice: uvbdhdsSlice
}
