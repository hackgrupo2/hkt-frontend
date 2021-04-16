class BackendService
{
	axios
	baseUrl

	constructor(axios)
	{
		this.axios = axios
		this.baseUrl = 'https://jsonplaceholder.typicode.com/'
	}

	getCourses(params)
	{
		let self = this;
		return self.axios.get(`${self.baseUrl}posts`);
	}

	getCourse(id)
	{
		let self = this;
		return self.axios.get(`${self.baseUrl}posts/${id}`);
	}
}

export default BackendService