import React, { useEffect, useRef } from 'react';
import feather from 'feather-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Krishi.css';

const KrishiSahayak = () => {
    const schemesCarouselRef = useRef(null);

    useEffect(() => {
        // Initialize AOS animations
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });

        // Initialize feather icons
        feather.replace();

        // Simple carousel functionality
        const carousel = schemesCarouselRef.current;
        if (carousel) {
            let isDown = false;
            let startX;
            let scrollLeft;

            const handleMouseDown = (e) => {
                isDown = true;
                carousel.classList.add('active');
                startX = e.pageX - carousel.offsetLeft;
                scrollLeft = carousel.scrollLeft;
            };

            const handleMouseLeave = () => {
                isDown = false;
                carousel.classList.remove('active');
            };

            const handleMouseUp = () => {
                isDown = false;
                carousel.classList.remove('active');
            };

            const handleMouseMove = (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - carousel.offsetLeft;
                const walk = (x - startX) * 2;
                carousel.scrollLeft = scrollLeft - walk;
            };

            carousel.addEventListener('mousedown', handleMouseDown);
            carousel.addEventListener('mouseleave', handleMouseLeave);
            carousel.addEventListener('mouseup', handleMouseUp);
            carousel.addEventListener('mousemove', handleMouseMove);

            return () => {
                carousel.removeEventListener('mousedown', handleMouseDown);
                carousel.removeEventListener('mouseleave', handleMouseLeave);
                carousel.removeEventListener('mouseup', handleMouseUp);
                carousel.removeEventListener('mousemove', handleMouseMove);
            };
        }
    }, []);

    const services = [
        { icon: 'cpu', title: 'AI Crop Prediction', description: 'Get accurate crop yield predictions using our advanced AI models tailored to your farm\'s conditions.' },
        { icon: 'trending-up', title: 'Market Analysis', description: 'Real-time market prices and trends to help you make informed selling decisions.' },
        { icon: 'shield', title: 'Pest & Disease Diagnosis', description: 'Upload photos of affected crops and get instant diagnosis with treatment recommendations.' },
        { icon: 'cloud', title: 'Weather Alerts', description: 'Hyper-local weather forecasts and alerts to protect your crops from adverse conditions.' },
        { icon: 'dollar-sign', title: 'Farm Expense Tracker', description: 'Monitor all farm expenses and income in one place with insightful analytics.' },
        { icon: 'file-text', title: 'Government Schemes Info', description: 'Stay updated with all agricultural schemes and subsidies you\'re eligible for.' },
    ];

    const schemes = [
        { logoIcon: 'award', tag: 'PM-KISAN', title: 'Income Support Scheme', description: '₹6,000 per year in three equal installments to all landholding farmer families.' },
        { logoIcon: 'droplet', tag: 'PMKSY', title: 'Irrigation Scheme', description: 'Harnessing water resources efficiently to expand cultivable area under irrigation.' },
        { logoIcon: 'shield', tag: 'PMFBY', title: 'Crop Insurance', description: 'Comprehensive risk insurance against natural calamities for food crops.' },
        { logoIcon: 'truck', tag: 'e-NAM', title: 'National Agricultural Market', description: 'Online trading platform for agricultural commodities to ensure better prices.' },
    ];

    const steps = [
        { step: 1, icon: 'bar-chart-2', title: 'Yield Optimization', description: 'Our AI analyzes soil, weather, and crop data to recommend optimal planting strategies.' },
        { step: 2, icon: 'alert-triangle', title: 'Risk Management', description: 'Get early warnings for pests, diseases, and adverse weather to protect your crops.' },
        { step: 3, icon: 'refresh-cw', title: 'Sustainable Practices', description: 'Implement eco-friendly farming techniques that improve soil health and reduce costs.' },
    ];

    return (
        <div className="krishi-sahisahayak">
            {/* Navigation */}
            <nav className="navigation">
                <div className="container navigation-container">
                    <div className="nav-logo">
                        <i data-feather="sun" className="icon-sun"></i>
                        <span className="logo-text">Krishi Sahayak</span>
                    </div>
                    <div className="nav-links">
                        <a href="#" className="nav-item">AI Crop Advisor</a>
                        <a href="#" className="nav-item">Product Insights</a>
                        <a href="#" className="nav-item">Farm Finance</a>
                        <a href="#" className="nav-item">Farm Schemes</a>
                        <button className="btn-login">Login</button>
                    </div>
                    <div className="mobile-menu-btn">
                        <button type="button">
                            <i data-feather="menu" className="icon-menu"></i>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="hero">
                <div className="container hero-content" data-aos="fade-up">
                    <h1 className="hero-title">AI Powered Insights for Modern Agriculture</h1>
                    <p className="hero-subtitle">Cultivate Prosperity, Harvesting the Future</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary">Get Started</button>
                        <button className="btn btn-secondary">Learn More</button>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <div className="section services-section">
                <h2 className="section-title" data-aos="fade-up">Our Services</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="card service-card" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                            <div className="card-icon-wrapper">
                                <i data-feather={service.icon} className="card-icon"></i>
                            </div>
                            <h3 className="card-title">{service.title}</h3>
                            <p className="card-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Government Schemes Carousel */}
            <div className="section schemes-section">
                <div className="container">
                    <h2 className="section-title" data-aos="fade-up">Government Schemes & Insights</h2>
                    <div className="carousel-wrapper">
                        <div className="carousel" ref={schemesCarouselRef}>
                            {schemes.map((scheme, index) => (
                                <div key={index} className="scheme-card" data-aos="fade-right" data-aos-delay={index * 100}>
                                    <div className="scheme-header">
                                        <div className="scheme-icon-wrapper">
                                            <i data-feather={scheme.logoIcon} className="scheme-icon"></i>
                                        </div>
                                        <span className="scheme-tag">{scheme.tag}</span>
                                    </div>
                                    <h3 className="scheme-title">{scheme.title}</h3>
                                    <p className="scheme-description">{scheme.description}</p>
                                    <button className="scheme-learn-more">
                                        Learn more <i data-feather="arrow-right" className="arrow-icon"></i>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="section how-it-works-section">
                <h2 className="section-title" data-aos="fade-up">How It Works</h2>
                <div className="how-it-works-grid">
                    {steps.map((step, index) => (
                        <div key={index} className="card how-it-works-card" data-aos="fade-up" data-aos-delay={100 + index * 100}>
                            <div className="step-number-wrapper">
                                <span className="step-number">{step.step}</span>
                            </div>
                            <div className="card-icon-wrapper">
                                <i data-feather={step.icon} className="card-icon"></i>
                            </div>
                            <h3 className="card-title">{step.title}</h3>
                            <p className="card-description">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="cta-section">
                <div className="container cta-content">
                    <h2 className="cta-title" data-aos="fade-up">Ready to Transform Your Farming?</h2>
                    <p className="cta-subtitle" data-aos="fade-up" data-aos-delay="100">Join thousands of farmers who are already benefiting from our AI-powered agriculture platform.</p>
                    <div className="cta-buttons" data-aos="fade-up" data-aos-delay="200">
                        <button className="btn btn-cta-white">Sign Up Free</button>
                        <button className="btn btn-cta-transparent">Request Demo</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                <div className="container footer-content">
                    <div className="footer-column">
                        <div className="footer-logo">
                            <i data-feather="sun" className="icon-sun"></i>
                            <span className="logo-text">Krishi SahiSahayak</span>
                        </div>
                        <p className="footer-description">Empowering farmers with AI-driven agricultural insights for sustainable and profitable farming.</p>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#" className="footer-link">Home</a></li>
                            <li><a href="#" className="footer-link">Features</a></li>
                            <li><a href="#" className="footer-link">Pricing</a></li>
                            <li><a href="#" className="footer-link">About Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Resources</h3>
                        <ul className="footer-links">
                            <li><a href="#" className="footer-link">Blog</a></li>
                            <li><a href="#" className="footer-link">Help Center</a></li>
                            <li><a href="#" className="footer-link">Tutorials</a></li>
                            <li><a href="#" className="footer-link">FAQs</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="footer-contact">
                            <li><i data-feather="mail" className="contact-icon"></i> support@krishisahayak.com</li>
                            <li><i data-feather="phone" className="contact-icon"></i> +91 9876543210</li>
                            <li><i data-feather="map-pin" className="contact-icon"></i> Bangalore, India</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="copyright">© 2023 Krishi Sahayak. All rights reserved.</p>
                    <div className="social-links">
                        <a href="#" className="social-link"><i data-feather="facebook" className="social-icon"></i></a>
                        <a href="#" className="social-link"><i data-feather="twitter" className="social-icon"></i></a>
                        <a href="#" className="social-link"><i data-feather="instagram" className="social-icon"></i></a>
                        <a href="#" className="social-link"><i data-feather="linkedin" className="social-icon"></i></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default KrishiSahayak;