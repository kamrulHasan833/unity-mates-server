const BiodataModel = require("../../models/Biodata");
const parseNumber = require("../../utils/parseNumber");
const filterBiodatas = async (req, res) => {
  try {
    const query = req?.query;
    const age = query?.age;
    const ages = age?.split("-");
    const ageMax = parseNumber(ages ? ages[1] : null);
    const ageMin = parseNumber(ages ? ages[0] : null);
    const biodataType = query?.biodataType;
    const memberType = query?.memberType;
    const division = query?.division;
    let filter = {};
    let sort = parseNumber(query?.sort);
    let skip = parseNumber(query?.skip);
    let limit = parseNumber(query?.limit);

    if (age) {
      filter.age = { $gt: ageMin, $lte: ageMax };
    } else if (biodataType) {
      filter.biodata_type = biodataType;
    } else if (memberType) {
      filter.member_type = memberType;

      sort = { age: 1 };
    } else if (division) {
      filter.permanent_division_name = division;
    } else {
      return res.status(200).json([]);
    }

    const result = await BiodataModel.find(filter)
      .skip(skip)
      .limit(limit)
      .sort(sort);

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = filterBiodatas;
