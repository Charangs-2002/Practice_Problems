import { Grid, Typography, Button } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <Grid
            container
            spacing={40}
            className="bg-gray-800 text-white p-4"
            sx={{ bgcolor: "black", color: "white", py: 2 }}
        >
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6">
                    Company
                </Typography>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        About
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Blog
                    </Button>
                </div>
                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Careers
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Press
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Jobs
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6">
                    Solution
                </Typography>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Marketing
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Analytics
                    </Button>
                </div>
                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Commerce
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Insights
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        SEO
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6">
                    Documents
                </Typography>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Privacy Policy
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        API Status
                    </Button>
                </div>
                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Terms of Service
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Documentation
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Changelog
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Typography className="pb-5" variant="h6">
                    Legal
                </Typography>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        claims
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Privacy
                    </Button>
                </div>
                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Terms
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Policies
                    </Button>
                </div>

                <div>
                    <Button variant="text" className="pb-3 text-white">
                        Conditions
                    </Button>
                </div>
            </Grid>
        </Grid>
    );
};

export default Footer;
