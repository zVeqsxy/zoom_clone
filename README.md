# Zoom Clone

This project is a clone of Zoom, a video conferencing software. It is built using Next.js, Clerk, Stream and other technologies.

## Description

This project is a comprehensive video conferencing platform designed to facilitate seamless online meetings, closely mirroring the capabilities of industry-leading software like Zoom. Built with Next.js, Clerk, Stream, and other cutting-edge technologies, it offers a robust set of features tailored for both individual and corporate use.

### **Note**: This project is still under development and is actively evolving. While the core features are fully operational, additional enhancements are on the way to further enrich the platform.

## Features

- **Meeting Creation and Management:** Users can effortlessly create instant meetings or schedule them for future dates, providing flexibility in how meetings are organized
- **User Management:** The platform supports adding participants to scheduled meetings, ensuring that all relevant parties can easily be included.
- **Comprehensive Interaction Tools:** Participants can share their camera feed, use microphones for audio communication, share screens for presentations, and express themselves through emojis. The platform also includes features to monitor internet connection quality, ensuring a smooth meeting experience.
- **Moderation and Recording:** Meeting creators have moderator privileges, including the ability to record meetings. These recordings can be accessed on a separate page, allowing for easy review and sharing.
- **Stable and Intuitive UI:** The user interface is designed for stability and ease of use, ensuring that participants can navigate and utilize the platform's features without hassle.


## Installation & Usage

1. Clone the repository
  ```bash
  git clone https://github.com/zVeqsxy/zoom-clone.git
  ```

2. Navigate to the project directory
  ```bash
  cd zoom-clone
  ```

3. Install dependencies
  ```bash
  npm install
  ```

4. Configure environment variables. Copy the `.env.example` file to `.env` and fill in the required values. You need to create an account on Clerk, Stream and Resend to get these keys. 
  ```bash
  cp .env.example .env
  ```

5. Run the development server
  ```bash
  npm run dev
  ```

6. Open your browser and navigate to `http://localhost:3000` to access the platform.

## Technologies

- Typescript
- Next.js 14
- Tailwindcss
- Shadcn/UI
- Clerk
- Stream

## License

This project is licensed under the [MIT License](LICENSE).
