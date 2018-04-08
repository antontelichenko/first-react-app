var mockApiData = [
	{
		id:1,
		name: 'Enter Sandman'
	},
	{
		id:2,
		name: 'pesnya'
	},
	{
		id:3,
		name: 'welcome home'
	},
	{
		id:4,
		name: 'hell in my code'
	},
];

export const getTracks = () => dispatch =>{
	setTimeout(() => {
			console.log('i got tracks');
			dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mockApiData })
		}, 2000)
	}
