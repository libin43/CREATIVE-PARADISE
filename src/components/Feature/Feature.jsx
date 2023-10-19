import React from 'react'
import phone from "../../assets/Phone.svg"
import star from "../../assets/Star.svg"
import shop from "../../assets/Shop.svg"
import model1 from "../../assets/Model1.svg"
import model2 from "../../assets/Model2.svg"
import model3 from "../../assets/Model3.svg"
import media from "../../assets/Mutlimedia.svg"
import community from "../../assets/Community.svg"
import prize from "../../assets/Prize.svg"
import "./Feature.css"

export const Feature = () => {
    return (
        <div className="feature-container">
            <div className="feature-main-title">
                Elevate Your Craft
            </div>
            <div className="feature-grid-first">
            <div className="feature-sub-grid1">
                <div className="content">
                    <div className="content-title">
                    Unlock Your ABC Earning Potential
                    </div>
                    <div className="content-body">
                    Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.    
                    </div>
                </div>
                <div className="content-image">
                    <div className="earning">
                        <img src={phone} alt="" />
                    </div>
                </div>

            </div>
            <div className="feature-sub-grid2">
                <div className="content">
                    <div className="content-title">
                    Boost Your Sales with Built-in E-commerce
                    </div>
                    <div className="content-body">
                    Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.
                    </div>
                </div>
                <div className="card-container">
                    <div className="card">
                        <div className="card-img">
                            <img src={shop} alt="" />
                        </div>
                        <div className="card-title">

                        </div>
                        <div className="card-body">

                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={model1} alt="" />
                        </div>
                        <div className="card-title">
                            Green modern bikini
                        </div>
                        <div className="card-body">
                            <span>$100</span>
                            <span> <img src={star} alt="" />4.3</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={model2} alt="" />
                        </div>
                        <div className="card-title">
                            Bikini pairs
                        </div>
                        <div className="card-body">
                            <span>100</span>
                            <span> <img src={star} alt="" />4.3</span>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-img">
                            <img src={model3} alt="" />
                        </div>
                        <div className="card-title">
                            Blue Bikini
                        </div>
                        <div className="card-body">
                            <span>100</span>
                            <span> <img src={star} alt="" />4.3</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="feature-grid-second">
            <div className="feature-sub-grid3">
            <div className="content-image">
                    <div className="feature-specific-img">
                        <img src={media} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                    Save Time with Automation and Efficiency
                    </div>
                    <div className="content-body">
                    Supercharge your content creation with ABC's automation tools. Streamline scheduling, multi-platform management, and more. Save time on repetitive tasks, focus on exceptional content.
                    </div>
                </div>
            </div>
            <div className="feature-sub-grid4">
            <div className="content-image">
                    <div className="feature-specific-img">
                        <img src={community} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                    Join a Supportive Community
                    </div>
                    <div className="content-body">
                    Join ABC's vibrant creator community. Connect with like-minded individuals, collaborate, and share experiences. Access mental health services and resources for personal and professional growth.                    </div>
                </div>
            </div>
            <div className="feature-sub-grid5">
            <div className="content-image">
                    <div className="feature-specific-img">
                        <img src={prize} alt="" />
                    </div>
                </div>
                <div className="content">
                    <div className="content-title">
                    Unlock Exclusive Opportunities and Prizes
                    </div>
                    <div className="content-body">
                    Enjoy ABC contests and challenges for valuable prizes. Showcase your exceptional talent and win business grants, scholarships, and more. Thrive on our platform with recognition and rewards.
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
