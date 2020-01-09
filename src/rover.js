function Rover(position, grid)
{
	var self = this;	

	self.currentPosition = position;
	
	grid.validatePoint(position.getPoint());

	self.move = function(commands)
	{
		for(i = 0; i < commands.length; i++){
			var currentCommand = commands[i];
			var command = CommandFactory(currentCommand, self.currentPosition, grid);
			self.currentPosition = command.execute();
		}
		return self.currentPosition;
	};
}