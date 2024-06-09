const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressErorr.js");
const { listingSchema, reviewSchema } = require("./schema.js");
module.exports.isLoggedIn = (req, res, next) => {
        if(!req.isAuthenticated()){
            req.session.redirectUrl = req.originalUrl;
        req.flash("error", "You must be logged in first!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        let errmsg = error.details.map((el) => el.message).join(",");
       throw new ExpressError(404, errmsg);
    }else{
        next();
    }
};

module.exports.isOwner =  async(req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id); {
        req.flash("error", "You are not the owner of this listings");
        res.redirect(`/listings/${id}`);

    }
    next();
};

module.exports.validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if(error) {
        let errmsg = error.details.map((el) => el.message).join(",");
       throw new ExpressError(404, errmsg);
    }else{
        next();
    }
};

module.exports.isReviewAuthor =  async(req, res, next) => {
    let { id, reviewId } = req.params;
    let review = await Review.findById(id); {
        req.flash("error", "You are not the author of this review");
        res.redirect(`/listings/${id}`);

    }
    next();
};