import IndexLayout from "@/components/layouts/IndexLayout";
import LoginLayout from "@/components/layouts/LoginLayout";
import CoursesLayout from "@/components/layouts/CoursesLayout";
import RegisterLayout from "@/components/layouts/RegisterLayout";
import UploadCourseLayout from "@/components/layouts/UploadCourseLayout";

export const routes = [
	{ path: '/', name: 'Index', component: IndexLayout },
	{ path: '/login', name: 'LoginForm', component: LoginLayout },
	{ path: '/register', name: 'RegisterForm', component: RegisterLayout },
	{ path: '/courses', name: 'Courses', component: CoursesLayout },
//	{ path: '/courses/:id', name: 'Course', component: ExampleView },
	{ path: '/courses/upload', name: 'UploadCourse', component: UploadCourseLayout },
]