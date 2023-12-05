const BiodataModel = require("../../../models/Biodata");
const createABiodata = async (req, res) => {
  try {
    const biodata = req?.body;
    const {
      biodata_type,
      biodata_id,
      name,
      profile_image,
      date_of_birth,
      height,
      weight,
      age,
      occupation,
      race,
      fathers_name,
      mothers_name,
      permanent_division_name,
      present_division_name,
      expected_partner_age,
      expected_partner_height,
      expected_partner_weight,
      email,
      mobile_number,
      premium_request_status,
    } = biodata ? biodata : {};

    let payload = {
      biodata_type,
      biodata_id,
      name,
      profile_image,
      date_of_birth,
      height,
      weight,
      age,
      occupation,
      race,
      fathers_name,
      mothers_name,
      permanent_division_name,
      present_division_name,
      expected_partner_age,
      expected_partner_height,
      expected_partner_weight,
      email,
      mobile_number,
    };

    if (premium_request_status) {
      const newStatue = premium_request_status ? "pending" : "";

      payload.premium_request_status = newStatue;
    }
    let result;
    if (biodata_id) {
      result = await BiodataModel.updateOne(
        { biodata_id: biodata_id },
        { $set: payload }
      );
    } else {
      const totaltBiodata = await BiodataModel.estimatedDocumentCount();
      const newBiodataId = totaltBiodata + 1;
      payload.biodata_id = newBiodataId;
      const newBiodata = new BiodataModel(payload);
      result = await newBiodata.save();
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = createABiodata;
