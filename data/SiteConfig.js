module.exports = {
  blogPostDir: "sample-posts", // The name of directory that contains your posts.
  siteTitle: "Nigel Schuster", // Site title.
  siteTitleAlt: "Nigel Schuster", // Alternative site title for SEO.
//  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://www.nigel-schuster.de", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  fixedFooter: false, // Whether the footer component is fixed, i.e. always visible
  siteDescription: "Homepage/Blog of Nigel Schuster. This will mostly talk about various Software Engineering topics, such as Operating Systems or Machine Learning.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "2019311021727351", // FB Application ID for using app insights
  siteGATrackingID: "UA-113900394-1", // Tracking code ID for google analytics.
  disqusShortname: "nigel-schuster-blog", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Nigel Schuster", // Username to display in the author segment.
  // userTwitter: "", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "New York City, NY", // User location to display in the author segment.
  userAvatar: "https://avatars1.githubusercontent.com/u/7909844", // User avatar to display in the author segment.
  userDescription:
    "Just another software engineer in the city. Interested in everything ranging from Operating Systems to Machine Learning and Frontend Development. Also huge fan of compilers and good language design.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Neitsch",
      iconClassName: "fa fa-github"
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nigelschuster/",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "AngelList",
      url: "https://angel.co/nigel-schuster/",
      iconClassName: "fa fa-angellist"
    },
    {
      label: "Email",
      url: "mailto:nigel.schuster+website@googlemail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Nigel Schuster" // Copyright string for the footer of the website and RSS feed.
};
