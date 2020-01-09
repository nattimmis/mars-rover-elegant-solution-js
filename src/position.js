function Position(point, direction)
{
	this.getDirection = function()
	{
		return direction;
	}

	this.getPoint = function()
	{
		return point;
	}

	this.getXCoordinate = function()
	{
		return point.getX();
	}

	this.getYCoordinate = function()
	{
		return point.getY();
	}
}