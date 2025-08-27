<template>
    <div class="header-wrap" style="top: 0px;">
        <header class="header">
            <div class="grid-container menu-grid-container">
                <div class="grid-x align-middle">
                    <div class="xlarge-1 medium-4 small-12 cell">
                        <div class="logo">
                            <div>
                                <a href="https://levinlaw.com/" class="custom-logo-link" rel="home" title="Levin Law"
                                    itemscope=""><img
                                        src="https://levinlaw.com/wp-content/uploads/2024/06/LP-Logo-97x66-1.png"
                                        class="custom-logo entered lazyloaded" itemprop="siteLogo" alt="Levin Law"
                                        data-lazy-src="https://levinlaw.com/wp-content/uploads/2024/06/LP-Logo-97x66-1.png"
                                        data-ll-status="loaded"><noscript><img
                                            src="https://levinlaw.com/wp-content/uploads/2024/06/LP-Logo-97x66-1.png"
                                            class="custom-logo" itemprop="siteLogo"
                                            alt="Levin Law" /></noscript></a><span class="show-for-sr">Levin Law</span>
                            </div>
                        </div>
                    </div>
                    <div class="xlarge-11 medium-8 small-12 cell menu-col">
                        <div v-if="showMobileV" class="title-bar hide-for-xlarge" data-responsive-toggle="main-menu" data-hide-for="xlarge"
                            >
                            <button class="menu-icon" :class="showDrop ? 'is-active' : ''" type="button" data-toggle="" aria-label="Menu" @click="showDrop = !showDrop"
                                aria-controls="main-menu">
                                <span></span></button>
                        </div>
                        <nav class="top-bar" id="main-menu" :style="showMobileV && showDrop ? { display: 'block',top:'96px' } : { display: 'none' }">
                            <a class="header-button" href="https://levinlaw.com/free-case-review/" target="_self">Free
                                Case Review</a>
                            <div class="menu-header-menu-container">
                                <ul id="menu-header-menu" class="menu header-menu dropdown" :class="showMobileV && showDrop ? 'accordion-menu' : ''"
                                    data-responsive-menu="accordion xlarge-dropdown" data-submenu-toggle="true"
                                    data-multi-open="false" data-close-on-click-inside="false" role="menubar"
                                    data-mutate="p70wca-responsive-menu" data-events="mutate"
                                    aria-multiselectable="false" data-dropdown-menu="7rpho9-dropdown-menu">
                                    <li id="menu-item-77"
                                        @mouseenter="navMouseEnter($event, 0)"
                                        :class="hoverNavIndex === 0 ? 'is-active' : ''"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-77 is-dropdown-submenu-parent opens-right"
                                        role="none" aria-haspopup="true" aria-label="Our Firm"><a
                                            href="https://levinlaw.com/our-firm/" role="menuitem">Our Firm</a>
                                        <ul @mouseleave="hoverNavIndex = ''" v-if="hoverNavIndex === 0" style="display: block;" class="menu custom-submenu first-sub vertical submenu is-dropdown-submenu" 
                                            role="menubar"  aria-labelledby="menu-item-77" aria-hidden="true"
                                            id="1oc1j1-acc-menu" data-submenu="">
                                            <div class="dark-blue-section">
                                                <div class="grid-container">
                                                    <div class="grid-x">
                                                        <div class="menu-wrap">
                                                            <ul class="menu">
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-821"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-821"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/our-history/"
                                                                        role="menuitem">Our History</a></li>
                                                                <li @mouseenter="drownSecMouseEnter($event, 0)"
                                                                    id="menu-item-825"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-825 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Our Results"><a
                                                                        href="https://levinlaw.com/our-results/"
                                                                        role="menuitem">Our Results</a>
                                                                    <ul @mouseleave="hoverSecIndex = ''"
                                                                        v-if="hoverSecIndex === 0"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-825"
                                                                        aria-hidden="true" id="vsub4l-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-827"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-827 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/awards/"
                                                                                role="menuitem">Awards</a></li>
                                                                        <li id="menu-item-828"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-828 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/our-jury-verdicts/"
                                                                                role="menuitem">Our Jury Verdicts</a>
                                                                        </li>
                                                                        <li id="menu-item-1336"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1336 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/court-appointments/"
                                                                                role="menuitem">Court Appointments</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-76"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"
                                                                    role="none"><a href="https://levinlaw.com/careers/"
                                                                        role="menuitem">Careers</a></li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-822"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-822"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/client-testimonials/"
                                                                        role="menuitem">Client Testimonials</a></li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-824"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-824"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/community-service/"
                                                                        role="menuitem">Community Service</a></li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-4144"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4144"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/mass-torts-made-perfect/"
                                                                        role="menuitem">Mass Torts Made Perfect</a></li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-11755"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-11755"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/2025-peoples-law-school/"
                                                                        role="menuitem">People’s Law School</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="featured-posts-wrap">
                                                            <div class="content-wrap">
                                                                <div class="post-item">
                                                                    <div class="image-wrap"><img width="1920"
                                                                            height="1011"
                                                                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201920%201011'%3E%3C/svg%3E"
                                                                            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                            alt="" decoding="async" fetchpriority="high"
                                                                            data-lazy-srcset="https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG.jpg 1920w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-300x158.jpg 300w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-1024x539.jpg 1024w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-768x404.jpg 768w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-1536x809.jpg 1536w"
                                                                            data-lazy-sizes="(max-width: 1920px) 100vw, 1920px"
                                                                            data-lazy-src="https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG.jpg"><noscript><img
                                                                                width="1920" height="1011"
                                                                                src="https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG.jpg"
                                                                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                                alt="" decoding="async"
                                                                                fetchpriority="high"
                                                                                srcset="https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG.jpg 1920w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-300x158.jpg 300w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-1024x539.jpg 1024w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-768x404.jpg 768w, https://levinlaw.com/wp-content/uploads/2024/07/LP-Building-Homepage-BG-1536x809.jpg 1536w"
                                                                                sizes="(max-width: 1920px) 100vw, 1920px" /></noscript>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h6 class="post-title">Levin Papantonio Named
                                                                            One of the Best Law Firms to Work For!</h6>
                                                                        <a class="button"
                                                                            href="https://levinlaw.com/lpr-named-one-best-law-firms-work/"
                                                                            role="menuitem">Read More</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="blue-bar">
                                                            <div class="text-wrap">
                                                                <p>We have helped to secure more than $80 billion in
                                                                    jury verdicts and settlements since 1955.</p>
                                                            </div><a class="button btn-white"
                                                                href="https://levinlaw.com/contact/" target="_self"
                                                                role="menuitem">Get in Touch</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li id="menu-item-402"
                                        @mouseenter="hoverNavIndex = ''"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-402"
                                        role="none"><a href="https://levinlaw.com/attorneys/"
                                            role="menuitem">Attorneys</a></li>
                                    <li id="menu-item-79"
                                        @mouseenter="navMouseEnter($event, 1)"
                                        :class="hoverNavIndex === 1 ? 'is-active' : ''"
                                        class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current_page_ancestor menu-item-has-children has-dropdown menu-item-79 is-dropdown-submenu-parent opens-right"
                                        role="none" aria-haspopup="true" aria-label="Practice Areas"><a
                                            href="https://levinlaw.com/practice-areas/" role="menuitem">Practice
                                            Areas</a>
                                        <ul  @mouseleave="hoverNavIndex = ''" v-if="hoverNavIndex === 1" style="display: block;"  class="menu custom-submenu first-sub vertical submenu is-dropdown-submenu"
                                            role="menubar" aria-labelledby="menu-item-79" aria-hidden="true" 
                                            id="z6g31t-acc-menu" data-submenu="">
                                            <div class="dark-blue-section">
                                                <div class="grid-container">
                                                    <div class="grid-x">
                                                        <div class="menu-wrap">
                                                            <ul class="menu">
                                                                <li 
                                                                     @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-4561"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4561"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/class-action-lawsuits/"
                                                                        role="menuitem">Class Actions</a></li>
                                                                <li 
                                                                     @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-7505"
                                                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-7505"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/truck-accident/"
                                                                        role="menuitem">Commercial Trucking</a></li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 1)"
                                                                    id="menu-item-70"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-70 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Drug Injuries"><a
                                                                        href="https://levinlaw.com/drug-injuries/"
                                                                        role="menuitem">Drug Injuries</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 1"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-70"
                                                                        aria-hidden="true" id="w6nfll-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-8316"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8316 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/depo-provera-lawsuit/"
                                                                                role="menuitem">Depo-Provera</a></li>
                                                                        <li id="menu-item-3165"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3165 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/insulin-overpricing-lawsuit-2/"
                                                                                role="menuitem">Insulin Overpricing</a>
                                                                        </li>
                                                                        <li id="menu-item-8642"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8642 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/oxbryta-lawsuits/"
                                                                                role="menuitem">Oxbryta</a></li>
                                                                        <li id="menu-item-9284"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9284 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/elaine-sharp-pill-mill-oxycodone-overdose-lawsuits/"
                                                                                role="menuitem">Oxycodone Overdoses</a>
                                                                        </li>
                                                                        <li id="menu-item-3167"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3167 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/ozempic-lawsuit/"
                                                                                role="menuitem">Ozempic</a></li>
                                                                        <li id="menu-item-6374"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6374 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/suboxone-tooth-decay-lawsuits-and-settlements/"
                                                                                role="menuitem">Suboxone Tooth Decay</a>
                                                                        </li>
                                                                        <li id="menu-item-3169"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3169 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/tepezza-lawsuit/"
                                                                                role="menuitem">Tepezza Hearing Loss</a>
                                                                        </li>
                                                                        <li id="menu-item-3170"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3170 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/valsartan-lawsuit/"
                                                                                role="menuitem">Valsartan</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 2)"
                                                                    id="menu-item-837"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-837 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Environmental Claims"><a
                                                                        href="https://levinlaw.com/environmental-claims/"
                                                                        role="menuitem">Environmental Claims</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 2"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-837"
                                                                        aria-hidden="true" id="yvwph5-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-6332"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6332 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/camp-lejeune-lawsuits/"
                                                                                role="menuitem">Camp Lejeune</a></li>
                                                                        <li id="menu-item-3174"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3174 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/pfas-injury-lawsuit/"
                                                                                role="menuitem">PFAS Injury</a></li>
                                                                        <li id="menu-item-3175"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3175 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/perfluoroalkyl-substances-pfas-lawsuits/"
                                                                                role="menuitem">PFAS Remediation</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 3)"
                                                                    id="menu-item-845"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-845 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Exploitation – Abuse"><a
                                                                        href="https://levinlaw.com/exploitation-abuse/"
                                                                        role="menuitem">Exploitation – Abuse</a>
                                                                    <ul 
                                                                    
                                                                        v-if="hoverSecIndex === 3"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-845"
                                                                        aria-hidden="true" id="p6ca34-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-4525"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4525 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/human-trafficking-lawsuit/"
                                                                                role="menuitem">Human Trafficking</a>
                                                                        </li>
                                                                        <li id="menu-item-846"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-846 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/mindgeek-pornhub/"
                                                                                role="menuitem">Mindgeek – Pornhub</a>
                                                                        </li>
                                                                        <li id="menu-item-843"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-843 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/sexual-assaults/"
                                                                                role="menuitem">Sexual Assaults</a></li>
                                                                        <li id="menu-item-4529"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4529 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/social-media-harm-lawsuits/"
                                                                                role="menuitem">Social Media
                                                                                Addiction</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 4)"
                                                                    id="menu-item-4558"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-4558 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Government Entities Litigation"><a
                                                                        href="https://levinlaw.com/government/"
                                                                        role="menuitem">Government Entities
                                                                        Litigation</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 4"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar" 
                                                                        aria-labelledby="menu-item-4558"
                                                                        aria-hidden="true" id="m3to8f-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-8589"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8589 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/antitrust/"
                                                                                role="menuitem">Antitrust</a></li>
                                                                        <li id="menu-item-8590"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8590 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/practice-areas/consumer-protection/"
                                                                                role="menuitem">Consumer Protection</a>
                                                                        </li>
                                                                        <li id="menu-item-8591"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8591 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/pfas-remediation/"
                                                                                role="menuitem">Environment</a></li>
                                                                        <li id="menu-item-8592"
                                                                            class="menu-item menu-item-type-custom menu-item-object-custom menu-item-8592 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/false-claims-act/"
                                                                                role="menuitem">False Claims Act</a>
                                                                        </li>
                                                                        <li id="menu-item-10621"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10621 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/ultra-processed-foods-lawsuits/"
                                                                                role="menuitem">Ultra-Processed
                                                                                Foods</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 5)"
                                                                    id="menu-item-839"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-839 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Medical Devices"><a
                                                                        href="https://levinlaw.com/medical-devices/"
                                                                        role="menuitem">Medical Devices</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 5"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-839"
                                                                        aria-hidden="true" id="bo7qrc-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-5016"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5016 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/abiomed-impella-heart-pump/"
                                                                                role="menuitem">Abiomed Impella Heart
                                                                                Pump</a></li>
                                                                        <li id="menu-item-7038"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7038 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/biozorb-lawsuit/"
                                                                                role="menuitem">BioZorb</a></li>
                                                                        <li id="menu-item-3189"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3189 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/breast-implant-lawsuit-aclc/"
                                                                                role="menuitem">Breast Implant</a></li>
                                                                        <li id="menu-item-8257"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8257 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/filshie-clip-lawsuit/"
                                                                                role="menuitem">Filshie Clip</a></li>
                                                                        <li id="menu-item-3207"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3207 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/hernia-mesh-lawsuit/"
                                                                                role="menuitem">Hernia Mesh</a></li>
                                                                        <li id="menu-item-6638"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6638 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/philips-cpap-lawsuit/"
                                                                                role="menuitem">Philips CPAP</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 6)"
                                                                    id="menu-item-4530"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-4530 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Personal Injury"><a
                                                                        href="https://levinlaw.com/pensacola-personal-injury-attorneys/"
                                                                        role="menuitem">Personal Injury</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 6"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-4530"
                                                                        aria-hidden="true" id="cnpklr-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-7315"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7315 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/practice-areas/boat-maritime-accident-lawyers/"
                                                                                role="menuitem">Boat &amp; Maritime
                                                                                Accidents</a></li>
                                                                        <li id="menu-item-4972"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4972 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/practice-areas/business-litigation-attorneys/"
                                                                                role="menuitem">Business Litigation</a>
                                                                        </li>
                                                                        <li id="menu-item-4531"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4531 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/practice-areas/auto-accident-attorneys/"
                                                                                role="menuitem">Car Accidents</a></li>
                                                                        <li id="menu-item-9732"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9732 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/los-angeles-fire-lawsuits/"
                                                                                role="menuitem">Los Angeles Fires</a>
                                                                        </li>
                                                                        <li id="menu-item-4534"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4534 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/pensacola-medical-malpractice-lawyers/"
                                                                                role="menuitem">Medical Malpractice</a>
                                                                        </li>
                                                                        <li id="menu-item-4539"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4539 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/nursing-home-elder-abuse-lawyer/"
                                                                                role="menuitem">Nursing Home Abuse</a>
                                                                        </li>
                                                                        <li id="menu-item-4535"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4535 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/pensacola-premises-liability-lawyers/"
                                                                                role="menuitem">Premises Liability</a>
                                                                        </li>
                                                                        <li id="menu-item-7314"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7314 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/train-accident-lawyers/"
                                                                                role="menuitem">Train Accidents</a></li>
                                                                        <li id="menu-item-9233"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9233 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/trucking-and-semi-truck-accidents/"
                                                                                role="menuitem">Trucking and Semi-Truck
                                                                                Accidents</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 7)"
                                                                    id="menu-item-7050"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-7050 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true" aria-label="PFAS">
                                                                    <a href="https://levinlaw.com/pfas-injury-lawsuit/"
                                                                        role="menuitem">PFAS</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 7"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar" 
                                                                        aria-labelledby="menu-item-7050"
                                                                        aria-hidden="true" id="5ois7d-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-10741"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10741 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/airport-afff-pfas-lawsuits-remediation/"
                                                                                role="menuitem">Airport PFAS:
                                                                                Remediation Costs of Class B Foam
                                                                                (AFFF)</a></li>
                                                                        <li id="menu-item-8260"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8260 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/pfas-injury-lawsuit/"
                                                                                role="menuitem">PFAS Personal Injury</a>
                                                                        </li>
                                                                        <li id="menu-item-8258"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-8258 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/pfas-remediation/"
                                                                                role="menuitem">PFAS Remediation</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 8)"
                                                                    id="menu-item-840"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-840 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Products Liability"><a
                                                                        href="https://levinlaw.com/products-liability/"
                                                                        role="menuitem">Products Liability</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 8"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-840"
                                                                        aria-hidden="true" id="6uxmss-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-3213"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3213 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/baby-formula-lawsuit/"
                                                                                role="menuitem">Baby Formula NEC</a>
                                                                        </li>
                                                                        <li id="menu-item-3217"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3217 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/hair-straightener-lawsuit/"
                                                                                role="menuitem">Hair Relaxer</a></li>
                                                                        <li id="menu-item-7035"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-7035 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/paraquat-parkinsons-lawsuits/"
                                                                                role="menuitem">Paraquat</a></li>
                                                                        <li id="menu-item-3224"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3224 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/monsanto-bayer-roundup-lawsuit/"
                                                                                role="menuitem">Roundup</a></li>
                                                                        <li id="menu-item-6349"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6349 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/talcum-powder-ovarian-cancer-lawsuit-lawyer-recall-settlement-help/"
                                                                                role="menuitem">Talcum Powder</a></li>
                                                                        <li id="menu-item-9604"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9604 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/ultra-processed-foods-lawsuits/"
                                                                                role="menuitem">Ultra-Processed
                                                                                Foods</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 9)"
                                                                    id="menu-item-841"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children has-dropdown menu-item-841 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Securities"><a
                                                                        href="https://levinlaw.com/securities-investment-fraud-lawyer/"
                                                                        role="menuitem">Securities</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 9"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar" 
                                                                        aria-labelledby="menu-item-841"
                                                                        aria-hidden="true" id="845tjb-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-4543"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-4540 current_page_item menu-item-4543 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/gwg-holdings-inc-l-bond-unsuitable-investment/"
                                                                                aria-current="page" role="menuitem">GWG
                                                                                Holdings</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 10)"
                                                                    id="menu-item-4544"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-4544 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Veterans"><a
                                                                        href="https://levinlaw.com/veterans/"
                                                                        role="menuitem">Veterans</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 10"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-4544"
                                                                        aria-hidden="true" id="3krr4s-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-6333"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6333 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/camp-lejeune-lawsuits/"
                                                                                role="menuitem">Camp Lejeune</a></li>
                                                                        <li id="menu-item-4551"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4551 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/iraq-war-veteran-contractor/"
                                                                                role="menuitem">Iraq Insurance
                                                                                Claims</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 11)"
                                                                    id="menu-item-5053"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-5053 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Workers Comp &amp; SS Disability"><a
                                                                        href="https://levinlaw.com/workers-comp/"
                                                                        role="menuitem">Workers Comp &amp; SS
                                                                        Disability</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 11"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-5053"
                                                                        aria-hidden="true" id="qcqt17-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-5056"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5056 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/social-security-disability-lawyers/"
                                                                                role="menuitem">Social Security
                                                                                Disability</a></li>
                                                                        <li id="menu-item-5018"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5018 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/workers-compensation-injuries/"
                                                                                role="menuitem">Workers Compensation</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div class="featured-posts-wrap">
                                                            <div class="content-wrap">
                                                                <div class="post-item">
                                                                    <div class="image-wrap"><img width="1024"
                                                                            height="1024"
                                                                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%201024%201024'%3E%3C/svg%3E"
                                                                            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                            alt="Johnson &amp; Johson" decoding="async"
                                                                            data-lazy-srcset="https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1.jpg 1024w, https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1-300x300.jpg 300w, https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1-150x150.jpg 150w, https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1-768x768.jpg 768w"
                                                                            data-lazy-sizes="(max-width: 1024px) 100vw, 1024px"
                                                                            data-lazy-src="https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1.jpg"><noscript><img
                                                                                width="1024" height="1024"
                                                                                src="https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1.jpg"
                                                                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                                alt="Johnson &amp; Johson"
                                                                                decoding="async"
                                                                                srcset="https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1.jpg 1024w, https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1-300x300.jpg 300w, https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1-150x150.jpg 150w, https://levinlaw.com/wp-content/uploads/2024/05/iStock-1373261365-1-768x768.jpg 768w"
                                                                                sizes="(max-width: 1024px) 100vw, 1024px" /></noscript>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h6 class="post-title">Plaintiffs in J&amp;J
                                                                            Talc Cancer Litigation File Class Action
                                                                            Complaint for Fraudulent Conveyance</h6><a
                                                                            class="button"
                                                                            href="https://levinlaw.com/newsroom/talc-cancer-plaintiffs-file-class-action-complaint-against-johnson-and-johnson-for-fraudulent-conveyance/"
                                                                            role="menuitem">Read More</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="blue-bar">
                                                            <div class="text-wrap">
                                                                <p>We have helped to secure more than $80 billion in
                                                                    jury verdicts and settlements since 1955.</p>
                                                            </div><a class="button btn-white"
                                                                href="https://levinlaw.com/contact/" target="_self"
                                                                role="menuitem">Get in Touch</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li id="menu-item-80"
                                        @mouseenter="navMouseEnter($event, 2)"
                                        :class="hoverNavIndex === 2 ? 'is-active' : ''"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-80 is-dropdown-submenu-parent opens-right"
                                        role="none" aria-haspopup="true" aria-label="Government"><a
                                            href="https://levinlaw.com/government/" role="menuitem">Government</a>
                                        <ul @mouseleave="hoverNavIndex = ''" v-if="hoverNavIndex === 2" style="display: block;" class="menu custom-submenu first-sub vertical submenu is-dropdown-submenu"
                                            role="menubar"  aria-labelledby="menu-item-80" aria-hidden="true"
                                            id="uc4m8e-acc-menu" data-submenu="">
                                            <div class="dark-blue-section">
                                                <div class="grid-container">
                                                    <div class="grid-x">
                                                        <div class="menu-wrap">
                                                            <ul class="menu">
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-928"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-928"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/antitrust/"
                                                                        role="menuitem">Antitrust</a></li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-4588"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4588"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/practice-areas/consumer-protection/"
                                                                        role="menuitem">Consumer Protection</a></li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 0)"
                                                                    id="menu-item-930"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-930 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Environment"><a
                                                                        href="https://levinlaw.com/environment/"
                                                                        role="menuitem">Environment</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 0"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar"
                                                                        aria-labelledby="menu-item-930"
                                                                        aria-hidden="true" id="0qkmox-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-3246"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-3246 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/perfluoroalkyl-substances-pfas-lawsuits/"
                                                                                role="menuitem">PFAS Remediation</a>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-931"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-931"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/false-claims-act/"
                                                                        role="menuitem">False Claims Act</a></li>
                                                                <li 
                                                                    @mouseenter="drownSecMouseEnter($event, 1)"
                                                                    id="menu-item-932"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children has-dropdown menu-item-932 is-dropdown-submenu-parent opens-right"
                                                                    role="none" aria-haspopup="true"
                                                                    aria-label="Pharmaceutical"><a
                                                                        href="https://levinlaw.com/drug-injuries/"
                                                                        role="menuitem">Pharmaceutical</a>
                                                                    <ul 
                                                                        v-if="hoverSecIndex === 1"
                                                                        @mouseleave="hoverSecIndex = ''"
                                                                        style="display: block;"
                                                                        class="menu vertical submenu is-dropdown-submenu"
                                                                        role="menubar" 
                                                                        aria-labelledby="menu-item-932"
                                                                        aria-hidden="true" id="1g8m59-acc-menu"
                                                                        data-submenu="">
                                                                        <li id="menu-item-4562"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4562 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/insulin-overpricing-lawsuit/"
                                                                                role="menuitem">Insulin Overpricing</a>
                                                                        </li>
                                                                        <li id="menu-item-4560"
                                                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-4560 is-submenu-item is-dropdown-submenu-item"
                                                                            role="none"><a
                                                                                href="https://levinlaw.com/government-opioid-lawsuit/"
                                                                                role="menuitem">Opioid</a></li>
                                                                    </ul>
                                                                </li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-933"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-933"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/securities-investment-fraud-lawyer/"
                                                                        role="menuitem">Securities</a></li>
                                                                <li 
                                                                    @mouseenter="hoverSecIndex = ''"
                                                                    id="menu-item-10623"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-10623"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/ultra-processed-foods-lawsuits/"
                                                                        role="menuitem">Ultra-Processed Foods</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="featured-posts-wrap">
                                                            <div class="content-wrap">
                                                                <div class="post-item">
                                                                    <div class="image-wrap"><img width="250"
                                                                            height="277"
                                                                            src="data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20250%20277'%3E%3C/svg%3E"
                                                                            class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                            alt="" decoding="async"
                                                                            data-lazy-src="https://levinlaw.com/wp-content/uploads/2024/02/Peter-Mougey-2023.webp"><noscript><img
                                                                                width="250" height="277"
                                                                                src="https://levinlaw.com/wp-content/uploads/2024/02/Peter-Mougey-2023.webp"
                                                                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                                alt="" decoding="async" /></noscript>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h6 class="post-title">National and State Opioid
                                                                            Settlements: Trailblazer Law Firm in the
                                                                            National Prescription Opiate Litigation
                                                                            Tells Its Story</h6><a class="button"
                                                                            href="https://levinlaw.com/national-and-state-opioid-settlements-trailblazer-law-firm-in-the-national-prescription-opiate-litigation-tells-its-story/"
                                                                            role="menuitem">Read More</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="blue-bar">
                                                            <div class="text-wrap">
                                                                <p>We have helped to secure more than $80 billion in
                                                                    jury verdicts and settlements since 1955.</p>
                                                            </div><a class="button btn-white"
                                                                href="https://levinlaw.com/contact/" target="_self"
                                                                role="menuitem">Get in Touch</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li id="menu-item-7136"
                                        @mouseenter="navMouseEnter($event, 3)"
                                        :class="hoverNavIndex === 3 ? 'is-active' : ''"
                                        class="menu-item menu-item-type-post_type_archive menu-item-object-newsroom menu-item-has-children has-dropdown menu-item-7136 is-dropdown-submenu-parent opens-right"
                                        role="none" aria-haspopup="true" aria-label="News"><a
                                            href="https://levinlaw.com/newsroom/" role="menuitem">News</a>
                                        <ul  @mouseleave="hoverNavIndex = ''" v-if="hoverNavIndex === 3" style="display: block;" class="menu custom-submenu first-sub vertical submenu is-dropdown-submenu"
                                            role="menubar"  aria-labelledby="menu-item-7136" aria-hidden="true"
                                            id="w3zvgw-acc-menu" data-submenu="">
                                            <div class="dark-blue-section">
                                                <div class="grid-container">
                                                    <div class="grid-x">
                                                        <div class="menu-wrap">
                                                            <ul class="menu">
                                                                <li id="menu-item-1099"
                                                                    class="menu-item menu-item-type-post_type_archive menu-item-object-newsroom menu-item-1099"
                                                                    role="none"><a href="https://levinlaw.com/newsroom/"
                                                                        role="menuitem">Newsroom</a></li>
                                                                <li id="menu-item-5420"
                                                                    class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5420"
                                                                    role="none"><a
                                                                        href="https://levinlaw.com/media-coverage/"
                                                                        role="menuitem">Media Coverage</a></li>
                                                            </ul>
                                                        </div>
                                                        <div class="featured-posts-wrap">
                                                            <div class="content-wrap">
                                                                <div class="post-item">
                                                                    <div class="image-wrap"><img width="900"
                                                                            height="500"
                                                                            src="https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation.webp"
                                                                            class="attachment-post-thumbnail size-post-thumbnail wp-post-image entered lazyloaded"
                                                                            alt="" decoding="async"
                                                                            data-lazy-srcset="https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation.webp 900w, https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation-300x167.webp 300w, https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation-768x427.webp 768w"
                                                                            data-lazy-sizes="(max-width: 900px) 100vw, 900px"
                                                                            data-lazy-src="https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation.webp"
                                                                            data-ll-status="loaded"
                                                                            sizes="(max-width: 900px) 100vw, 900px"
                                                                            srcset="https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation.webp 900w, https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation-300x167.webp 300w, https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation-768x427.webp 768w"><noscript><img
                                                                                width="900" height="500"
                                                                                src="https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation.webp"
                                                                                class="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                                alt="" decoding="async"
                                                                                srcset="https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation.webp 900w, https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation-300x167.webp 300w, https://levinlaw.com/wp-content/uploads/2024/02/Terrorism-Litigation-768x427.webp 768w"
                                                                                sizes="(max-width: 900px) 100vw, 900px" /></noscript>
                                                                    </div>
                                                                    <div class="text-wrap">
                                                                        <h6 class="post-title">Attorneys immersed in
                                                                            counter-terrorism and social media harm
                                                                            litigation filed amicus briefs with SCOTUS
                                                                        </h6><a class="button"
                                                                            href="https://levinlaw.com/attorneys-immersed-in-counter-terrorism-and-social-media-harm-litigation-filed-amicus-briefs-with-scotus/"
                                                                            role="menuitem">Read More</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="blue-bar">
                                                            <div class="text-wrap">
                                                                <p>We have helped to secure more than $80 billion in
                                                                    jury verdicts and settlements since 1955.</p>
                                                            </div><a class="button btn-white"
                                                                href="https://levinlaw.com/contact/" target="_self"
                                                                role="menuitem">Get in Touch</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li id="menu-item-82"
                                        @mouseenter="hoverNavIndex = ''"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-82"
                                        role="none"><a href="https://levinlaw.com/co-counsel/"
                                            role="menuitem">Co-Counsel</a></li>
                                    <li id="menu-item-5947"
                                        @mouseenter="hoverNavIndex = ''"
                                        class="menu-item menu-item-type-custom menu-item-object-custom menu-item-5947"
                                        role="none"><a href="https://levinlaw.com/contact/" role="menuitem">(800)
                                            277-1193</a></li>
                                    <li id="menu-item-83"
                                        @mouseenter="hoverNavIndex = ''"
                                        class="search-item menu-item menu-item-type-custom menu-item-object-custom menu-item-83"
                                        role="none"><a href="#" role="menuitem">Search</a></li>
                                </ul>
                            </div>
                            <div class="grid-container search-container">
                                <div class="search-wrap">
                                    <!-- BEGIN of search form -->
                                    <form method="get" class="search" action="https://levinlaw.com/">
                                        <button type="submit" name="submit" class="search__submit"
                                            aria-label="Submit search"><svg xmlns="http://www.w3.org/2000/svg"
                                                width="25.72" height="24.726" viewBox="0 0 25.72 24.726">
                                                <g id="Group_162944" data-name="Group 162944"
                                                    transform="translate(-1.673 -0.61)">
                                                    <g id="Ellipse_10" data-name="Ellipse 10"
                                                        transform="translate(11.328 3.61)" fill="none" stroke="#000"
                                                        stroke-width="3">
                                                        <ellipse cx="6.532" cy="6.532" rx="6.532" ry="6.532"
                                                            stroke="none"></ellipse>
                                                        <ellipse cx="6.532" cy="6.532" rx="8.032" ry="8.032"
                                                            fill="none"></ellipse>
                                                    </g>
                                                    <line id="Line_1" data-name="Line 1" x1="7.605" y2="7.205"
                                                        transform="translate(3.793 16.011)" fill="none" stroke="#000"
                                                        stroke-linecap="round" stroke-width="3"></line>
                                                </g>
                                            </svg></button>
                                        <input type="search" name="s" class="search__input" placeholder="Search"
                                            value="" aria-label="Search input">
                                        <input type="hidden" name="xxTrustedFormCertUrl"
                                            value="https://cert.trustedform.com/33d9e8da2558548baf270598748d64aa879fa3cf"
                                            id="xxTrustedFormCertUrl_0"><input type="hidden" name="xxTrustedFormToken"
                                            value="https://cert.trustedform.com/33d9e8da2558548baf270598748d64aa879fa3cf"
                                            id="xxTrustedFormToken_0"><input type="hidden" name="xxTrustedFormPingUrl"
                                            value="https://ping.trustedform.com/0.VyedMGL72PcluON-mQGKpNX5AVX1JmmlRnoYtQCsS6RG8Mj1sMGIBfwhbQJRQUZu6yFE7Ec.xHwSP6UaOFaISQBrZutknQ.gkiR2l__BYVsExrkdKG10w"
                                            id="xxTrustedFormPingUrl_0">
                                    </form>
                                    <!-- END of search form -->
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Add the CTA button component -->
            <div class="mobile-cta">
                <a href="#cta-target" class="button expanded">Free Case Evaluation</a>
            </div>
        </header>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showMobileV = ref(false)
const showDrop = ref(false)
const hoverNavIndex = ref('')
const hoverSecIndex = ref('')

const navMouseEnter = (e, index) => {
    // console.log(e, index);
  hoverSecIndex.value = ''
  hoverNavIndex.value = index
}
const drownSecMouseEnter = (e, index) => {
    // console.log(e, index);
  hoverSecIndex.value = index
}
onMounted(() => {
    showMobileV.value = window.innerWidth < 1200
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1200) {
      showMobileV.value = false
      showDrop.value = false
    } else {
      showMobileV.value = true
    }
  })
})
</script>

<style lang="scss" scoped>
.accordion-menu li {
    width: 100%;
}
</style>