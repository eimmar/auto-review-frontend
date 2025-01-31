import DataApi from "./dataApi";
import Slugifier from "../utils/slugifier";

const baseUrl = "/vehicle/";

class VehicleService {

    static getAll() {
        return DataApi.get(baseUrl);
    }

    static get(id) {
        return DataApi.get(baseUrl + id);
    }

    static create(data) {
        return DataApi.post(baseUrl, data);
    }

    static update(id, data) {
        return DataApi.put(baseUrl + id, data);
    }

    static delete(id) {
        return DataApi.delete(baseUrl + id);
    }

    static slugify(vehicle) {
        return Slugifier.slugify(vehicle.brand + '-' + vehicle.model);
    }
}
export default VehicleService;
