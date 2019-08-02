function x = tridiag_solver(e,a,c,b)
% Solves Ax=b by imitating LU decomposition, using 1-dim vectors rather than nxn matrices.
% Turn A=LU, solve LUx=b by solving Ly=b for y and Ux=y for x.
% Inputs should not contain components that are zero.
%
% Input
%       e -> (n-1)x1 vector is the coefficient matrix of x directly left of the diagonal
%       a -> nx1 vector of diagonal elements in the coefficient matrix of x
%       c -> (n-1)x1 vector in the coefficient matrix of x directly right of the diagonal 
%       b -> nx1 column vector on the right hand side of Ax=b
% Output
%       x -> nx1 column vector of solutions to the linear system

n=length(b);

%alpha=zeros(n,1);
%beta=zeros(n-1,1)
alpha=[];
beta=[];
alpha(1)=a(1);
for k=2:n
  beta(k-1)=e(k-1)/alpha(k-1);
  alpha(k)=a(k)-beta(k-1)*c(k-1);
end

%y=zeros(n,1);
y=[];
y(1)=b(1);
for k=2:n
  y(k)=b(k)-beta(k-1)*y(k-1);
end

%x=zeros(n,1);
x=[];
x(n)=y(n)/alpha(n);
% last element found first, loop backwards
for k=n-1:-1:1
  x(k)=(y(k)-c(k)*x(k+1))/alpha(k);
end