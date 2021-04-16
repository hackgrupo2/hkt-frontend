import IndexLayout from "@/components/layouts/IndexLayout";
import LoginLayout from "@/components/layouts/LoginLayout";
import CoursesLayout from "@/components/layouts/CoursesLayout";
import RegisterLayout from "@/components/layouts/RegisterLayout";
import UploadCourseLayout from "@/components/layouts/UploadCourseLayout";
import CourseLayout from "@/components/layouts/CourseLayout";
import DonateLayout from "@/components/layouts/DonateLayout";

export const routes = [
	{ path: '/', name: 'Index', component: IndexLayout },
	{ path: '/login', name: 'LoginForm', component: LoginLayout },
	{ path: '/register', name: 'RegisterForm', component: RegisterLayout },
	{ path: '/courses', name: 'Courses', component: CoursesLayout },
	{ path: '/courses/:id', name: 'Course', component: CourseLayout },
	{ path: '/donate', name: 'Course', component: DonateLayout },
	{ path: '/upload-course', name: 'UploadCourse', component: UploadCourseLayout },
]