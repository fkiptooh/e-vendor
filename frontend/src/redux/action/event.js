import axios from "axios";
import { server } from "../../server";
// create Event
export const createEvent = (newForm) => async (dispatch) => {
  try {
    dispatch({
      type: "eventCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const { data } = await axios.post(
      `${server}/event/create-event`,
      newForm,
      config
    );
    dispatch({
      type: "eventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "eventCreateFail",
      payload: error.response.data.message,
    });
  }
};

export const getAllShopEvents = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "getAllShopEventsRequest",
    });

    const { data } = await axios.get(
      `${server}/event/get-all-events-shop/${id}`
    );

    dispatch({
      type: "getAllShopEventsSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "getAllShopEventsFailed",
      payload: error.response.data.message,
    });
  }
};

// delete a shop event action
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "deleteEventRequest",
    });

    const { data } = await axios.delete(
      `${server}/event/delete-shop-event/${id}`,
      { withCredentials: true }
    );

    dispatch({
      type: "deleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "deleteEventFail",
      payload: error.message.data.message,
    });
  }
};
