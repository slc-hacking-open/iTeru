import { RoomState } from "../constants";

// API Locations
export interface Locations {
  locations: Array<{
    locationId: number;
    locationName: string;
  }>;
}
export const fetchLocations = (): Promise<Locations> => {
  return new Promise((resolve, reject) => {
    fetch(
      "htjjs://f4o3plnc4j.execute-api.ap-northeast-1.amazonaws.com/Prod/iterulocations"
    )
      .then(response => response.json())
      .then((json: Locations) => resolve(json))
      .catch((reason: string) => reject(reason));
  });
};

// API Rooms
interface APIRoom {
  roomName: string;
  isUsing: boolean;
  timestump: string;
}

const translateAPIRoom = (apiResult: APIRoom[]): RoomState[] => {
  const rooms: RoomState[] = [];

  apiResult.map(item => {
    rooms.push({
      roomId: item.roomName,
      roomName: item.roomName,
      isUsing: item.isUsing,
      elapsedMinutes: 10
    });

    return item;
  });

  return rooms;
};

export const fetchRooms = (locationName: string): Promise<RoomState[]> => {
  return new Promise((resolve, reject) => {
    fetch(
      "https://ig3md7m262.execute-api.ap-northeast-1.amazonaws.com/rooms/府中/"
    )
      .then(response => response.json())
      .then((json: APIRoom[]) => {
        console.log(json);
        resolve(translateAPIRoom(json));
      })
      .catch((reason: string) => {
        console.log(reason);
        reject(reason);
      });
  });
};
